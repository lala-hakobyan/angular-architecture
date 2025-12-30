// eslint-disable-next-line @typescript-eslint/no-require-imports
let express = require('express');
// eslint-disable-next-line @typescript-eslint/no-require-imports
let cartItems = require('./database/cart-items.json');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require('cors');

const app = express();
const port = 3020;

app.use(cors({
  origin: [
    'http://local.angular-shop-app.com:4200',
    'http://localhost:4200'
  ], // allow only this domains
  credentials: true, // optional: allow cookies/auth headers
}));

app.use(express.json());

app.get('/api/cart/items', (req, res) => {
  setTimeout(() => res.json(cartItems), 5000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
