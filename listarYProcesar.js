addElemento();


function addElemento() {
    
    //Consumir servicio de consulta de todos los registros
    var http = new XMLHttpRequest();
    var url = "http://localhost:8080/Registros";
    var elementos;
    http.open("GET", url , true);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            elementos = JSON.parse(http.response);
            for (var i = 0; i < elementos.length; i++) {
                //Agregar cada registro a la tabla 
                addRowProd(elementos[i]);
            }
        }
    }
    http.send(null);
}


function addRowProd(elementos) {
    //Obtener elemento tabla
    var table = document.getElementById("Registros");

    var i = table.rows.length;

    //Insertar Fila
    var row = table.insertRow(i);
     
    //Insertar Celdas
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    //Insertar contenido de las celdas
    cell1.innerHTML = elementos.id;
    cell2.innerHTML = elementos.nombre;
    cell3.innerHTML = elementos.apellido;
    cell4.innerHTML = elementos.procesado;
    cell5.innerHTML = '<input type = "checkbox"></input>';
}

function actualizarProcesado(){
    //Declaracion de variable arreglo de elementos y elemento
    var elementos=[];
    var elemento;
    //Obtener la tabla
    var table = document.getElementById("Registros");
    var z=table.getElementsByTagName("input");
    for (var j=0;j < z.length;j++){
        //Verificar si esta seleccionado
        if (z[j].checked){
            //Agregar elemento seleccionado
            row = table.rows[j+1].cells;
            elemento = {id: row[0].innerHTML,nombre: row[1].innerHTML ,apellido: row[2].innerHTML, procesado: row[3].innerHTML};
            elementos.push(elemento);
        }
    }
    //Consumo de servicio para actualizar estado procesado 
    const http = new XMLHttpRequest();
    var url = "http://localhost:8080/Registros"; 
    http.open("PUT", url );
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
           location.reload();
        }
    }
    //Envio de peticion
    http.send(JSON.stringify(elementos));

    
}