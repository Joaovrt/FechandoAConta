nome = document.getElementById("formGroupExampleInput");
email = document.getElementById("inputEmail4");

function cadastroMessage(){
    if(nome.value.length != 0 && email.value.length != 0)
        window.alert("O seu cadastro foi concluído com sucesso!");
}
