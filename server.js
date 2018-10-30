const app = require('koa')();
const router = require('koa-router')();

// Log requests
app.use(function *(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

router.get('/api/getver', function *() {
  this.body = process.env.VERSIONE+" ";
});

router.get('/api/getenv', function *() {
  this.body = process.env.AMBIENTE+" ";
});

router.get('/', function *() {
  this.body = 'Ready to receive requests';
});

app.use(router.routes());
app.use(router.allowedMethods());

var server = app.listen(8081);

process.on('SIGTERM', function() {
  console.log('Shutting down...');
  server.close();
});

