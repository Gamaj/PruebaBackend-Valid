
function guardarDatos() {

    //Obtener datos de la pagina    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastName").value;

    //Crear entidad registro
    var registro = { nombre: nombre, apellido: apellido, procesado: false };
    //Crear request
    const http = new XMLHttpRequest();
    var url = "http://localhost:8080/Registros"; //Url del servicio
    http.open("POST", url );
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(JSON.stringify(registro));//Enviar Json con el registro
    


}