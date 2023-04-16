const Numeros = document.getElementsByClassName("teclas");
const operador = document.getElementsByClassName("signos");
let varr = document.getElementsByClassName("form-control");
let res = 0;
function numero(n) {
    if (Numeros) {
        document.getElementsByClassName("form-control").value += n;
    } 
}
function simbolos (o) {
    let value = aux.value;
    if (value.endsWith("+") || value.endsWith("-") || value.endsWith("*") || value.endsWith("/")) {
    return;

    }
    varr.value += o;
}
