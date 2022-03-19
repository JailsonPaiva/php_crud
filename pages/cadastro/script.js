var Campo_nome = document.querySelector('input[name=nome]')
var Campo_nascimento = document.querySelector('input[name=nascimento]')
var Campo_cpf = document.querySelector('input[name=cpf]')
var Campo_celular = document.querySelector('input[name=celular]')
var Campo_email = document.querySelector('input[name=email]')
var Campo_cep = document.querySelector('input[name=cep]')
var Campo_cidade = document.querySelector('input[name=cidade]')
var Campo_estado = document.querySelector('input[name=estado]')
var Campo_bairro = document.querySelector('input[name=bairro]')
var Campo_rua = document.querySelector('input[name=rua]')
var Campo_observacao = document.querySelector('textarea[name=obs]')

var Btn_cadastrar = document.getElementById("cadastrar")



Btn_cadastrar.addEventListener("click", function(e) {
    e.preventDefault();

    let valorNome = Campo_nome.value;
    let valorNacimiento = Campo_nascimento.value;
    let valorCpf = Campo_cpf.value
    let valorCelular = Campo_celular.value
    let valorEmail = Campo_email.value
    let valorCep = Campo_cep.value
    let valorCidade = Campo_cidade.value
    let valorEstado = Campo_estado.value
    let valorBairro = Campo_bairro.value
    let valorRua = Campo_rua.value
    let valorObs = Campo_observacao.value

    let xhr = new XMLHttpRequest();
    const url = 'insert.php';
    xhr.open('POST', url);
    xhr.responseType = 'json';

    let documento = {
        "nome": valorNome,
        "nascimento":valorNacimiento,
        "cpf": valorCpf,
        "celular": valorCelular,
        "email":valorEmail,
        "cep": valorCep,
        "cidade": valorCidade,
        "estado": valorEstado,
        "bairro": valorBairro,
        "rua": valorRua,
        "observacao": valorObs
    }

    xhr.send(documento);
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status == 200) {
            console.log("enviado")
            console.log(JSON.parse(xhr.response))
        } else {
            console.log('ocorreu um erro')
        }
    }
    
})