const res = document.getElementById('res')
const campo_email = document.querySelector('input[name=email]')
// const campo_nome = document.querySelector('input[name=nome]')
const btn_pesquisar = document.getElementById('pesquisar')
const btn_limpar = document.getElementById('limpar')

btn_pesquisar.addEventListener('click', () => {
    res.innerHTML = ""
    PesquisarEmail()
    campo_email.value =''
    // CaregarDados()
})

btn_limpar.addEventListener('click',() => res.innerHTML ='')

function PesquisarEmail() {
    const valor_email = campo_email.value
    // const valor_nome = campo_nome.value
    
    const url = 'http://localhost/cadastro_clientes/pages/buscarCliente/buscar.php'

    const xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.response);
            PegarDados(response)
            console.log(response)
           
        }
    }
    xhr.send(JSON.stringify({email:valor_email}));
}

function PegarDados(response) {
    response.forEach((dado) => {

        const cliente_id = dado[0]
        const url = ` http://localhost/cadastro_clientes/pages/buscarCliente/clienteInfo.php?id=${cliente_id}`

        const xhr = new XMLHttpRequest();
        // xhr.responseType = 'json';
        xhr.open('GET', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json')
        // xhr.onreadystatechange = () => {
        //     if (xhr.readyState === 4) {
        //         const response = JSON.parse(xhr.response);
        //         console.log(response)
            
        //     }
        // }
        xhr.send();
        const linha = document.createElement('div.card-body')
        const nome = document.createElement('h4')
        const email = document.createElement('span')
        const hr = document.createElement('hr')
        const btn_editar = document.createElement('button')
        const btn_excluir = document.createElement('button')
        btn_excluir.classList.add('btn')
        btn_excluir.classList.add('btn-danger')
        btn_excluir.classList.add('m')

        btn_editar.addEventListener('click',() => {
            window.location.href=`../editarCliente/index.html?id=${dado[0]}`
            
        })

        btn_excluir.addEventListener('click', () =>{
            DeletarCliente(dado[0])
            // LIMPANDO A TELA E RENDERIZANDO OS DADOS NOVAMENTE
            res.innerHTML = ''
            // CaregarDados()
        })

        btn_editar.classList.add('btn')
        btn_editar.classList.add('btn-success')

        btn_excluir.innerHTML = 'Excluir'
        btn_editar.innerHTML = 'Editar'
        nome.innerHTML = dado[1]
        email.innerHTML = dado[4]

        linha.appendChild(hr)
        linha.appendChild(nome)
        linha.appendChild(email)
        linha.appendChild(btn_editar)
        linha.appendChild(btn_excluir)
        res.appendChild(linha)
        
        console.log(btn_excluir)
    })
}

function DeletarCliente(id) {
    const url = `http://localhost/cadastro_clientes/pages/listaClientes/deletar.php?id=${id}`

    const xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    xhr.open('DELETE', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.response);
            console.log(response)
        }
    }
    xhr.send();
}

