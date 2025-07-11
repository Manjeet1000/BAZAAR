fetch("https://script.google.com/macros/s/your-script-id/exec")
  .then(res => res.json())
  .then(data => {
    data.forEach(stock => {
      const stockBox = document.createElement('div');
      stockBox.className = 'stock';
      stockBox.innerHTML = `
        <h2>${stock['Stock Name']}</h2>
        <div class="price">₹${stock['Price (auto)']}</div>
      `;
      document.getElementById('stock-list').appendChild(stockBox);
    });
  });
