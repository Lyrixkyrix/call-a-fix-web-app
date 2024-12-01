function sendServiceProviderNotifications(service, state, lga, name, phone, date, descpbox, myFile, timestamp, userEmail, userName, requestId) {
  // Access the Providers sheet (replace with your correct sheet ID)
  const providerSheet = SpreadsheetApp.openById('19iQ0DRNxP5NOKlH6PFUxhfKpg7xRlhE262SRcmIX8CU').getSheetByName('ServiceProviders');
  
  // Get all the service provider data (assuming columns: Service, State, LGA, Name, Email, Subscription Plan)
  const providersData = providerSheet.getDataRange().getValues();
  
  // Log the selected service and state for debugging
  Logger.log('Selected Service:', service);
  Logger.log('Selected State:', state);
  
  // Filter the service providers based on the selected service and state
  const filteredProviders = providersData.filter(row => {
    const providerServices = row[4].trim();  // Assuming service column is at index 3 (comma-separated services)
    const providerState = row[9].trim();    // Assuming state column is at index 8
    Logger.log('Checking provider services:', providerServices, 'state:', providerState);

    // Split the services by commas and check if the requested service is present
    const serviceList = providerServices.split(',').map(service => service.trim());
    return serviceList.includes(service) && providerState === state;
  });

  Logger.log('Filtered Providers Count:', filteredProviders.length);
  
  // If no providers found, log and return 0
  if (filteredProviders.length === 0) {
    Logger.log('No providers found for service: ' + service + ' in state: ' + state);
    return 0; // No emails to send
  }

  let emailSentCount = 0; // To count how many emails were sent

  // Retrieve notified providers from the cache or a dedicated sheet
  const cache = CacheService.getScriptCache();
  let notifiedProviders = cache.get(requestId);
  notifiedProviders = notifiedProviders ? JSON.parse(notifiedProviders) : [];  // If no data, use an empty array

  // Send email notification to each provider, ensuring no duplicate notifications
  filteredProviders.forEach(provider => {
    const providerEmail = provider[11];  // Email column
    const providerName = provider[5];    // Provider Name column
    const subscriptionPlan = provider[13];  // Subscription plan column (index 12)

    // Check if the provider has already been notified for this requestId
    if (notifiedProviders.includes(providerEmail)) {
      Logger.log('Provider ' + providerName + ' already notified. Skipping.');
      return;  // Skip sending the email if already notified
    }

    const subject = `${service} Request from ${name} in ${lga}, ${state} - ${requestId}`;
    
    // Construct the email body
    let body = ` 
      <p>Dear ${providerName},</p>
      <p>You have a New Service Request: <strong>${service}</strong>.</p>
      
      <h3>Request Details:</h3>
      <ul>
        <li><strong>Request ID:</strong> ${requestId}</li>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> `; // Always include the "Phone:" label

    // Check if the subscription plan is expired
    if (subscriptionPlan !== "Expired") {
      // Include the phone number if the plan is not expired
      body += `${phone}`;
    } else {
      // If the plan is expired, show the subscription message with a link
      body += `Subscription Expired!, <a href="https://www.callafix-website/pages/subscribe.html" target="_blank">click here to view Client PHONE NUMBER</a>`;
    }

    body += `</li>
        <li><strong>State:</strong> ${state}</li>
        <li><strong>Area:</strong> ${lga}</li>
        <li><strong>When:</strong> ${date}</li>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Description:</strong> ${descpbox}</li>
        <li><strong>Uploads:</strong> ${myFile}</li>
        <li><strong>Timestamp:</strong> ${timestamp}</li>
      </ul>
      
      <p>Please review the request and contact the customer as soon as possible.</p>
      <p>Best Regards,<br>Call A Fix Support Team</p>
      <hr>
    `;

    // Send the email to the provider (Note: GmailApp.sendEmail does not support HTML, so we need to send as HTML)
    GmailApp.sendEmail(providerEmail, subject, '', {
      htmlBody: body  // Use htmlBody to allow HTML content (link)
    });

    // Mark the provider as notified for this requestId
    notifiedProviders.push(providerEmail);

    emailSentCount++; // Increment email sent count
  });

  // Save the updated list of notified providers to the cache
  cache.put(requestId, JSON.stringify(notifiedProviders));

  // After sending emails, update the status in the RequestQueue sheet from "pending" to "Processed"
  updateRequestStatusToProcessed(requestId);

  return emailSentCount; // Return the number of emails sent
}

// Helper function to update the status in the RequestQueue sheet to "Processed"
function updateRequestStatusToProcessed(requestId) {
  const requestQueueSheet = SpreadsheetApp.openById('1da5uRHXKeG-ZZOFbRs_EUI7HWnE6EkDXuZDz3Txdf4A').getSheetByName('RequestQueue');
  
  // Find the row that matches the requestId
  const requestQueueData = requestQueueSheet.getDataRange().getValues();
  for (let i = 0; i < requestQueueData.length; i++) {
    if (requestQueueData[i][0] === requestId) {  // Assuming the requestId is in the first column
      // Update the status to "Processed"
      requestQueueSheet.getRange(i + 1, 15).setValue('Processed');  // Assuming status is in the 15th column (index 14)
      Logger.log('Request ID ' + requestId + ' status updated to "Processed"');
      break;
    }
  }
}
