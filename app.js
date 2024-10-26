import express from 'express';
import path from 'path';
const app = express();
const __dirname = path.resolve();

app.get("/",function (req, res){
    res.sendFile(__dirname + '/html/Teste.html')
})
app.listen(8080, function(){console.log("Servidor Rodando!!")})