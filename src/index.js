
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({extended: false})); // entender quando passar paramentros url e conseguir deporar
app.use(cors());

require('./controllers/empresaController')(app);
require('./controllers/funcionarioController')(app);

app.listen(3000);


