var titulo = document.querySelector(".titulo");
titulo.texContent = "arecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tsAlura = paciente.querySelector(".info-altura");
var altura = tdAlura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValida = true;
var alturaEhValida = true;

if (peso < = 0 || peso >=100){
    console.log("Peso Invalido!")
    pesoEhValido = false;
    tdImc.textContent = "Peso invalido";
}

if (altura <=)