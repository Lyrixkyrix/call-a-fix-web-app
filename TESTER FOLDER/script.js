document.getElementById('addItem').addEventListener('click', function() {
    const itemContainer = document.getElementById('itemContainer');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <input type="text" class="itemName" placeholder="Item Name" required>
        <input type="text" class="itemDescription" placeholder="Description">
        <input type="number" class="itemQuantity" placeholder="Quantity" required>
        <input type="number" class="itemPrice" placeholder="Price (Naira)" required>
    `;
    itemContainer.appendChild(newItem);
});

document.getElementById('generateInvoice').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title
    const title = document.getElementById('invoiceTitle').value;
    const subcategory = document.getElementById('subcategory').value;
    doc.text(`Invoice Title: ${title}`, 10, 10);
    doc.text(`Subcategory: ${subcategory}`, 10, 20);
    doc.text('Items:', 10, 30);

    // Items
    const items = document.querySelectorAll('.item');
    let y = 40;
    items.forEach(item => {
        const name = item.querySelector('.itemName').value;
        const description = item.querySelector('.itemDescription').value;
        const quantity = item.querySelector('.itemQuantity').value;
        const price = item.querySelector('.itemPrice').value;

        doc.text(`Name: ${name}`, 10, y);
        doc.text(`Description: ${description}`, 10, y + 10);
        doc.text(`Quantity: ${quantity}`, 10, y + 20);
        doc.text(`Price: ${price} Naira`, 10, y + 30);
        y += 50; // Spacing for next item
    });

    // Save as draft and preview
    doc.save('draft_invoice.pdf');
    window.open(doc.output('bloburl'));
});
