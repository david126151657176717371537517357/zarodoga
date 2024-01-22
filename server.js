require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

var db_modul = require('./modules/database');
;

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.use('/db', db_modul);


app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});