const express = require('express');
const rateLimit = require('express-rate-limit');
const pjson = require('./package.json');

const app = express();

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use(express.static(`./dist/${pjson.name}`));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: `dist/${pjson.name}` })
);

console.log(`${pjson.name} running`);

app.listen(process.env.PORT || 8097);

