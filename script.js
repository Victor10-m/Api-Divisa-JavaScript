// nuestra variable Inputs recupera los datos con coincidente del id valor y los recorremos en un foreach
let Inputs = document.querySelectorAll(".valor");

// hacemos la peticion de la api 
let url = "https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY";

fetch(url)
.then(function(response) {
    return (response.json());
}).then(function(data) {
    let inputDolar = document.querySelector('#USD')
    inputDolar.dataset.cambio = data.rates.USD;  //consumo de datos de api

    let inputLibra = document.querySelector('#GBP') 
    inputLibra.dataset.cambio = data.rates.GBP;

    let inputYanes = document.querySelector('#JPY')
    inputYanes.dataset.cambio = data.rates.JPY;

    Inputs.forEach( input => {
    input.value = input.dataset.cambio;  // igualamos el valor del input con el valor de datacabio

    })
})
.catch(function(error) {
    console.error('error en conexion de api', error)
})
function valorModificado(input){
    //logicamente para saber resultado es dividir entre el sata de cambio 
    let factor = input.value / input.dataset.cambio;

    //recorremos los resultados de 
    Inputs.forEach( input => {
        // recorremos el areglo y mutimplocamos ek valor del dataset por la division
        input.value = (input.dataset.cambio * factor ).toFixed(1); //ToFixed nos ayuda a definir el numero de deeimales  

    })
}