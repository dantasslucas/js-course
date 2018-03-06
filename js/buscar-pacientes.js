//Ajax responsavel por fazer requisições assincronas sem travar o servidor

var botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click",function(){
    console.log("Buscando Paciente");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
        var erro =document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erro.classList.add("invisicel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            console.log(typeof pacientes);

            pacientes.forEach(function(paciente){
                adcionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel");
        }
        
        
    })
    xhr.send();
})