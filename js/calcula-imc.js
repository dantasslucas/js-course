  //alert("Olá Mundo!");
  //console.log("Oi Mundo");
  //console.log(document);
  var titulo = document.querySelector(".titulo");
  titulo.textContent = "Aparecida Nutricionista";
  titulo.addEventListener("click",function(){
    console.log("Estamos usando uma função anônima");
  })
 
  function mostraImagem(){
    console.log("Fui clicado!");
  }
  
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i<pacientes.length;i++){
  var paciente = pacientes[i];
  
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector(".info-imc");
  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);
  tdImc.textContent = calculaImc(peso,altura);
 
  if (!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }
  if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }
   
}

function validaPeso(peso){
  if(peso => 0 && peso <= 1000){
    return true
  }else{
   return false;
  }
}

function validaAltura(altura){
  if(altura=>0 && altura<=3){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso,altura){
  var imc = peso/(altura *altura);
  return imc.toFixed(2);
}












