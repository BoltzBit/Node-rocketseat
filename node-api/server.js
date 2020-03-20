//para começar a confirar seu servidor começar chamando o express
const express = require('express');
const mongoose = require('mongoose')

//iniciando o App
const app = express();

//Iniciando o DB
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.connect(
    "mongodb+srv://mateus:mateus@cluster0-txh3a.mongodb.net/test?retryWrites=true&w=majority",
    { useFindAndModify: false}
);

//metodo para pegar requisicao e respostas
app.get('/',(req,res) => {
    res.send('Olá rocketseat,2563');
});

app.listen(3000);