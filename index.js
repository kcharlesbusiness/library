require('custom-env').env('development');

const app = require('./server/server');

app.listen({
  hostname: process.env.APP_HOST,
  port: process.env.APP_PORT
}, () => {
  console.log(`Working on ${process.env.APP_ENV}. Port: ${process.env.APP_PORT}`);
});