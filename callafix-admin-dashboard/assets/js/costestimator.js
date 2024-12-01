function calculateCost() {
    const item = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);
  
    const totalCost = quantity * price;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h2>Estimated Cost</h2>
      <p>Item: ${item}</p>
      <p>Quantity: ${quantity}</p>
      <p>Price per Unit: ${price.toFixed(2)}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
    `;
  }
  
  function generateInvoice() {
    // Add logic to create a detailed invoice based on the estimated cost
    // You can use a template engine or create the HTML structure dynamically
    const invoiceContent = `
      <h2>Invoice</h2>
      ${document.getElementById("result").innerHTML}
    `;
  
    // Display the invoice in a new window or modal
    const invoiceWindow = window.open("", "_blank", "width=800,height=600");
    invoiceWindow.document.write(invoiceContent);
  }