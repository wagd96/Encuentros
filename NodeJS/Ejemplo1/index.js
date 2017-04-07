//importamos las bibliotecas
const express = require('express');
const morgan = require('morgan');

//Declaracion de instancias
var app = express();

//se le indica a la app que use morgan
app.use(morgan('dev'));

//Se define un puerto para correr la app (debe ser > 1000)
const puerto = 3000;

//Metodo get inicial con la ruta '/' que se ejecuta al abrir la pagina
app.get('/',function (req,res) {
	res.sendfile('./index.html');
	//res.send("Hola amiguitos, como están?");
});

app.get('/home',function (req,res) {
	res.send("Hola amiguitos, estamos en home con nuestro metodo get");
});

//Le decimos a la app que escuche en ese puerto
app.listen(puerto,function() {
	console.log("Hola mundo");
});