//RECUPERA LOS DATOS DEL CACHE DEL NAVEGADOR
var Cliente = localStorage.getItem("Cliente");
var Producto = localStorage.getItem("Producto");
var Día = localStorage.getItem("Día");
var Agregar = localStorage.getItem("Agregar");

document.getElementById("Cliente").textContent = Cliente;
document.getElementById("Producto").textContent = Producto;
document.getElementById("Día").textContent = Día;
document.getElementById("Agregar").textContent = Agregar;

