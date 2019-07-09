const express = require('express');
const bodyParser = require('body-parser');
const expressGraphql = require('express-graphql');
const mongoose = require('mongoose');
const models = require('./models');
const schema = require('./schema/schema');


const app = express();

const MONGO_URI = 'mongodb+srv://karl:badboy10@library-bh0r2.mongodb.net/test?retryWrites=true&w=majority';
if( !MONGO_URI ){
  throw new Error('You must provide a MongoDB URI.');
}

// Configure the MongoLab instance
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', () => console.log('Error connected to MongoLab instance.', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphql({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack-config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;

// app.disable('x-powered-by');
// app.use(express.static(path.join(__dirname, 'build')));
// // need to declare a "catch all" route on your express server
// // that captures all page requests and directs them to the client
// // the react-router do the route part
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
//
// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Frontend start on http://localhost:5000`)
// });