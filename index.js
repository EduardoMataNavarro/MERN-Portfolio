const express = require('express');
const engine = require('react-engine');

const app = express();

app.engine('.jsx', engine.server.create());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

app.set('/web/porfolio', require('./http/routes/portfolioRoutes'));