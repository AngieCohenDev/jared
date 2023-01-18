function comenzar(){
    zonadatos=document.getElementById("zona-datos");
    var archivos=document.getElementById("archivos");

    archivos.addEventListener("change", procesar, false);
}
function procesar(e){
    var archivos=e.target.files;
    zonadatos.innerHTML="";
    var mi_archivo=archivos[0];

        if(!mi_archivo.type.match(/image/)){
            alert("Selecciona una imagen, por favor");
        }
        else{
            zonadatos.innerHTML+="Nombre del archivo: " + mi_archivo.name + "<br>";
            zonadatos.innerHTML+="Tamaño del archivo: " + Math.round(mi_archivo.size/1024) + " kb <br>";
        }

    var lector= new FileReader();
    lector.readAsDataURL(mi_archivo);
    lector.addEventListener("load", mostrar_web, false);
}
function mostrar_web(e){
    var resultado=e.target.result;

    zonadatos.innerHTML+="<img src='" + resultado + "' width='40%'>";
}
window.addEventListener("load",comenzar,false);