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

const Btn_cadastrar = document.getElementById("cadastrar")
const consultar = document.getElementById("consultar")


function MascaraCpf() {
	if(Campo_cpf.value.length == 3 || Campo_cpf.value.length == 7) {
		Campo_cpf.value += "."
	} else if(Campo_cpf.value.length == 11) {
			Campo_cpf.value += "-"
	} 
}

function MascaraNascimento() {
	if(Campo_nascimento.value.length == 2 || Campo_nascimento.value.length == 5) {
		Campo_nascimento.value += "/"
	}
}

function mask(o) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
function mphone(v) {
var r = v.replace(/\D/g, "");
r = r.replace(/^0/, "");
if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
} else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
} else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
} else {
    r = r.replace(/^(\d*)/, "($1");
}
return r;
}

function MascaraCep() {
	if(Campo_cep.value.length == 5) {
		Campo_cep.value += "-"
	}
}

Btn_cadastrar.addEventListener("click", (e) => {
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

    console.log(documento)

    const url = 'http://localhost/cadastro_clientes/pages/cadastro/inserir.php';
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json')

    // xhr.setRequestHeader = () => {
    //     if (xhr.readyState === 4) {
    //         console.log(xhr.response)
    //     }
    // }

    xhr.send(JSON.stringify(documento));

    window.location.href='../listaClientes/index.html'
})

consultar.addEventListener("click", () => {
    window.location.href='../listaClientes/index.html'
})