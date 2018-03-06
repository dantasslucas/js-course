var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
  //A função event.preventDefault() conseguiu evitar o comportamento padrão do formulário.
  event.preventDefault();
  
  //Captura Form
  var form = document.querySelector("#form-adciona");
  //Cria um objeto paciente e retorna o mesmo
  var paciente = obtemPacienteDoForm(form);
  
 
  var erros = validaPaciente(paciente);
  console.log(erros);
  if(erros.length>0){
    exibeMensagensDeErro(erros);
    return;
  }
  
  adcionaPacienteNaTabela(paciente);
  //Limpar campo form após inserir os dados;
  form.reset();
  var mensagemDeErros =document.querySelector("#mensagens-erro");
  mensagemDeErros.innerHTML = "";
});
function adcionaPacienteNaTabela(paciente) {
   //Cria as Tr e Td necessárias para a tabela e retorna uma Tr
   var pacienteTr = montarTr(paciente);
   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoForm(form){
  var paciente={
    nome : form.nome.value,
    peso : form.peso.value,
    altura : form.altura.value,
    gordura : form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
  }
  return paciente;
}

function montarTr(paciente){
  
  var pacienteTr = document.createElement("tr");
  //Criar classe Tr
  pacienteTr.classList.add("paciente");
  //Inserir Td na Tr e criar classes e Td;
  pacienteTr.appendChild(montarTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montarTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montarTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montarTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montarTd(paciente.imc,"info-imc")); 

  return pacienteTr;
}

function montarTd(dado,classe){
  var td = document.createElement("td")
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){
  var erros = [];
  if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco");
  if((paciente.gordura.length) == 0) erros.push("Gordura não pode ser em branco");
  if((paciente.peso.length) == 0) erros.push("Peso não pode ser em branco");
  if((paciente.altura.length) == 0) erros.push("Altura não pode ser em branco");
  if(!validaPeso(paciente.peso)) erros.push("Peso é invalido");
  if(!validaAltura(paciente.altura)) erros.push("Altura é invalida");
    return erros;
}



























