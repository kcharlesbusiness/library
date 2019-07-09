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