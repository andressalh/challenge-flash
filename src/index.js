const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({extended: false})); // entender quando passar paramentros url e conseguir deporar

require('./controllers/empresaController')(app);
require('./controllers/funcionarioController')(app);

app.listen(3000);


