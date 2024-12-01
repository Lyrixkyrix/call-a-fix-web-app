function doPost(e) {
    // Get form data from the request
    const form = e.parameter;
    const selectedresult = form.selectedresult;
    const states = form.states;
    const lgarea = form.lgarea;
    const date = form.date;
    const descpbox = form.descpbox;
    const myFile = form.myFile;
    const name = form.name;
    const email = form.email;
    const phone = form.phone;
    const cphone = form.cphone;
    const uname = form.uname;
    const pword = form.pword;
  
    // ... Extract other form fields as needed
  
    // Access the Google Sheet
    const sheet = SpreadsheetApp.openById('1da5uRHXKeG-ZZOFbRs_EUI7HWnE6EkDXuZDz3Txdf4A').getSheetByName('RequestForm'); // Replace with your sheet ID and name
  
    // Append data to the sheet
    const lastRow = sheet.getLastRow() + 1;
    sheet.appendRow([selectedresult, states, lgarea, date, descpbox, myFile, name, email, phone, cphone, uname, pword, /* ... other data */]);
  
    // Send notification email
    const subject = selectedresult + " Request from " + name + ", in " + lgarea + " " + states;
    const body = `
      Name: ${name}
      Phone: ${phone}
      State: ${states}
      LGA: ${lgarea}
      Date: ${date}
      Service: ${selectedresult}
      Description: ${descpbox}
      Uploads: ${myFile}
      `;
    GmailApp.sendEmail('callafix@gmail.com', subject, body);
  
    // Return a success message (optional)
    return ContentService.createTextOutput('Form data submitted successfully!');
  }