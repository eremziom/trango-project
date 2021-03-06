const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

//POSTROUTES IMPORT
const productRoutes = require('./routes/products.routes');
const orderRoutes = require('./routes/orders.routes');

const app = express();

//MIDLEWARE

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//API ENDPOINTS

app.use('/api', productRoutes);
app.use('/api', orderRoutes);

//API ERROR PAGE

app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...'});
});

//BUILD APP
app.use(express.static(path.join(__dirname, './build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

//MONGOOSE

mongoose.connect(`mongodb+srv://Erem:mongoDBhaslo@clustererem-2ilyb.mongodb.net/TrangoTowers`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

//START SERVER
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port : '+ port);
});
