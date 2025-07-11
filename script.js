const API_KEY = 'd1ofc31r01qjadrjpj9gd1ofc31r01qjadrjpja0'; // Your Finnhub API key

const stockSymbols = [
  { name: 'RELIANCE', symbol: 'RELIANCE.BSE' },
  { name: 'TCS', symbol: 'TCS.BSE' },
  { name: 'INFY', symbol: 'INFY.BSE' },
  { name: 'HDFCBANK', symbol: 'HDFCBANK.BSE' }
];

const stockList = document.getElementById('stock-list');

stockSymbols.forEach(stock => {
  fetch(`https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const stockBox = document.createElement('div');
      stockBox.className = 'stock';
      stockBox.innerHTML = `
        <h2>${stock.name}</h2>
        <div class="price">₹${data.c}</div>
      `;
      stockList.appendChild(stockBox);
    })
    .catch(error => {
      console.error('Error fetching stock data:', error);
    });
});
