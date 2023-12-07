
function agregar(){
    Cliente = document.getElementById("Cliente").value
    Producto = document.getElementById("Producto").value
    Día = document.getElementById("Día").value
    Agregar= document.getElementById("Agregar").value
    
    //ALMACENA LA INFORMACION EN EL CACHE DEL NAVEGADOR
    localStorage.setItem("Cliente", Cliente);
    localStorage.setItem("Producto", Producto);
    localStorage.setItem("Día", Día);
    localStorage.setItem("Agregar", Agregar);

    
}

