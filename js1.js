
//funcion que calcula que transporte tomar
function transporte(distancia){
    switch(true){
        case distancia<=1000:
            return "Conviene ir a pie";            
        case distancia<=10000:
            return "Conviene ir en bicicleta";            
        case distancia<=30000:
            return "Conviene ir en colectivo";            
        case distancia<=100000:
            return "Conviene ir en auto";
        default:
            return "Conviene ir en avión";                
    }
}

//funcion que calcula el maximo entre los numeros
const maximo=(texto)=>{
    let array=JSON.parse('['+texto+']');
    return Math.max(...array);
}

//funcion que agrega el texto de respuesta a la pagina
function agregarTexto(lugar,elemento,contenido){
    const contenedor=document.querySelector(lugar);
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
    const item=document.createElement(elemento);
    const textoItem=document.createTextNode(contenido);
    item.appendChild(textoItem);
    contenedor.appendChild(item);
}


//****SECCION DE CALCULO DE TRANSPORTE****/

//seleccionar formulario
const formulario1=document.querySelector(".f1");
//accion que llama a la funcion que calcula el transporte
const calcularTransporte=(event)=>{
    event.preventDefault();
    const {distancia}=event.target
    agregarTexto(".resultado1","H2",transporte(distancia.value));
}
//evento del boton submit
formulario1.addEventListener('submit',calcularTransporte);


//****SECCION DE CALCULO DEL NUMERO MAXIMO****/

//seleccionar formulario
const formulario2=document.querySelector(".f2");
//accion que llama a la funcion que calcula el maximo
const calcularMaximo=(event)=>{
    event.preventDefault();
    const {texto}=event.target
    agregarTexto(".resultado2","H2","El maximo es "+maximo(texto.value));
}
//evento del boton submit
formulario2.addEventListener('submit',calcularMaximo);
