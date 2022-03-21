const Campo_nome = document.querySelector('input[name=nome]')
const Campo_nascimento = document.querySelector('input[name=nascimento]')
const Campo_cpf = document.querySelector('input[name=cpf]')
const Campo_celular = document.querySelector('input[name=celular]')
const Campo_email = document.querySelector('input[name=email]')
const Campo_cep = document.querySelector('input[name=cep]')
const Campo_numero = document.querySelector('input[name=numero]')
const Campo_cidade = document.querySelector('input[name=cidade]')
const Campo_estado = document.querySelector('input[name=estado]')
const Campo_bairro = document.querySelector('input[name=bairro]')
const Campo_rua = document.querySelector('input[name=rua]')
const Campo_observacao = document.querySelector('textarea[name=obs]')
const id_cliente = document.querySelector('input#id_cliente')

const Btn_atualizar = document.getElementById("atualizar")


window.onload = () => {
    
    const teste = new URL(window.location.href);
    const params = new URLSearchParams(teste.search);
    console.log(teste)
    console.log(params.get('id'))
    
    const cliente_id = parseInt(params.get('id'))

    const url = `http://localhost/cadastro_clientes/pages/editarCliente/editar.php?id=${cliente_id}`

    const xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.response);
            console.log(response)
            PreencherCampos(response)
        }
    }
    xhr.send();


}

function PreencherCampos(response) {
    response.forEach((dados) => {
        id_cliente.value = dados[0]
        Campo_nome.value = dados[1]
        Campo_nascimento.value = dados[12]  
        Campo_cpf.value = dados[2]
        Campo_celular.value = dados[3]
        Campo_email.value = dados[4]
        Campo_cep.value = dados[5]
        Campo_numero.value = dados[6]
        Campo_cidade.value = dados[7]
        Campo_estado.value = dados[8]
        Campo_bairro.value = dados[9]
        Campo_rua.value = dados[10]
        Campo_observacao.value = dados[11]
    });
}

Btn_atualizar.addEventListener("click", (e) => {
    e.preventDefault();

  

    const valorNome = Campo_nome.value
    const valorNacimiento = Campo_nascimento.value
    const valorCpf = Campo_cpf.value
    const valorCelular = Campo_celular.value
    const valorEmail = Campo_email.value
    const valorCep = Campo_cep.value
    const valorNumero = Campo_numero.value
    const valorCidade = Campo_cidade.value
    const valorEstado = Campo_estado.value
    const valorBairro = Campo_bairro.value
    const valorRua = Campo_rua.value
    const valorObs = Campo_observacao.value


    const documento = {
        id: parseInt(id_cliente.value),
        nome: valorNome,
        nascimento:valorNacimiento,
        cpf: valorCpf,
        celular: valorCelular,
        email:valorEmail,
        cep: valorCep,
        numero: valorNumero,
        cidade: valorCidade,
        estado: valorEstado,
        bairro: valorBairro,
        rua: valorRua,
        observacao: valorObs
    }

    // console.log(id_cliente.value)

    const url = 'http://localhost/cadastro_clientes/pages/editarCliente/atualizar.php';
    
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.setRequestHeader = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.response)
        }
    }

    xhr.send(JSON.stringify(documento));

})