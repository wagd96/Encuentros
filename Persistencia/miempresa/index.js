var express = require('express');
var app = express();

app.get('/', function (req, res) { 
  res.sendfile("index.html");
});
app.get('/cliente', function (req, res) { 
  res.sendfile("cliente.html");
});
app.get('/empleado', function (req, res) { 
  res.sendfile("empleado.html");
});
app.get('/tienda', function (req, res) { 
  res.sendfile("tienda.html");
});
app.get('/producto', function (req, res) { 
  res.sendfile("producto.html");
});
app.get('/venta', function (req, res) { 
  res.sendfile("venta.html");
});


app.listen(3000, function () {
  console.log('Aplicacion escuchando en el puerto 3000!');
});
