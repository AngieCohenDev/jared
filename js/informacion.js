var imagen;
function llamarImagen(){
    imagen=document.getElementsByTagName("img");
    imagen.addEventListener("mouseover",crecer,false);
    imagen.addEventListener("mouseout",menguar,false);      
}
function crecer(){
    imagen.width=350;
    imagen.heigth=350;
}
function menguar(){
    imagen.width=280;
    imagen.heigth=250;
}
window.addEventListener("load",llamarImagen,false);