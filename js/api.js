document.addEventListener('DOMContentLoaded', obtenerDatos)
const monedaInput = document.getElementById('moneda')
const botonBuscar = document.getElementById('boton');
const contenido = document.getElementById('monedaConvertir');
const valorResultado = document.getElementById('resultado');
botonBuscar.addEventListener('click', resultado)
const url = 'https://mindicador.cl/api/';


async function obtenerDatos (){
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log("hubo error un la conexion con la API")
        
    }

}


async function mostrarTML(){

    try {
        const data = await obtenerDatos();
        let html = '';

        Object.values(data).forEach( perfil => {
        const {codigo,valor} = perfil;
        if (codigo && valor ){
            html += `
            <option value="${valor}">${codigo}</option>
            `
        }
  
    });
    contenido.innerHTML = html;
        
    } catch (error) {

        alert("hubo un error en la conexion")
        
    }

}
 mostrarTML();

function resultado(){
    const dropSelect = parseFloat(contenido.value)
    const inputSelect = parseFloat(monedaInput.value)

    if (!isNaN(dropSelect) && !isNaN(inputSelect) && inputSelect >= 0){
        let resultadoConvertido = inputSelect/dropSelect;
        valorResultado.textContent = resultadoConvertido;
    } else {
        alert("ingresa un numero mayor a 0 ")

    }

    
    
}









    

    






    