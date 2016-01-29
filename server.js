const nconf = require('nconf');
const proxy = require('express-http-proxy');
const Express = require('express');

nconf.argv()
  .env()
  .file({ file: './config.json' })
  .defaults({
    PORT: 5001
  });

const app = new Express();
app.get('/', function (req, res) {
  res.send('Hello. This is a website.');
});

app.use('/.well-known/acme-challenge/', proxy(nconf.get('REMOTE_HOST'), {
  forwardPath: function(req, res) {
    var challengePath = require('url').parse(req.url).path;
    var path = nconf.get('REMOTE_PATH') + challengePath;
    console.log('Challenge: /.well-known/acme-challenge' + challengePath);
    console.log('Proxied To: ' + nconf.get('REMOTE_HOST') + path);
    return path;
  }
}));

app.listen(nconf.get('PORT'), function(error) {
  if (error) {
    return console.log(error);
  }
  console.log('http://localhost:' + nconf.get('PORT'));
});
