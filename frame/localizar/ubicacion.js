function comenzar(){
    boton=document.getElementById("boton");
    boton.addEventListener("click", dar_ubicacion, false);
}
function dar_ubicacion(){
    var parametros={
        enableHighAccuracy: true,
                    timeout:10000,
                    maximumAge:60000
    };
    navigator.geolocation.getCurrentPosition(mostrar_posicion, errores)
}
function mostrar_posicion(posicion){
    var ubicacion=document.getElementById("ubicacion");
    var mi_ubicacion="";
    mi_ubicacion+="Latitud: " + posicion.coords.latitude + "<br>";
    mi_ubicacion+="Longitud: " + posicion.coords.longitude + "<br>";
    mi_ubicacion+="Exactitud: " + posicion.coords.accuracy + "<br>";
    ubicacion.innerHTML=mi_ubicacion;
    alert("la posicion no es muy exacta :(");
}
function errores(error){
    alert("Se ha producido un error" + " " + error.code + " " + error.message);

    if(error.code==1){
        alert("Debes de permitir el uso de la geolocalizacion en tu navegador");
    }
}

window.addEventListener("load", comenzar, false);