//para começar a confirar seu servidor começar chamando o express
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.connect(
    "mongodb+srv://mateus:mateus@cluster0-txh3a.mongodb.net/test?retryWrites=true&w=majority",
    { useFindAndModify: false}
);
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3000);
