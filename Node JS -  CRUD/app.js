const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.routes');

const app = express();
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
