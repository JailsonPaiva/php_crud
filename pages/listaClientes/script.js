const Btn_cadastrar = document.getElementById("cadastrar")

Btn_cadastrar.addEventListener("click", () => window.location.href='../cadastro/index.html')
consultar.addEventListener("click", () => {window.location.href='../buscarCliente/index.html'})

function CaregarDados() {
    const url = 'http://localhost/cadastro_clientes/pages/listaClientes/listar.php'

    const xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response))
            const response = JSON.parse(xhr.response);
            CriarLista(response)
        }
    }
    xhr.send();
}

window.onload = () => {CaregarDados()}

function CriarLista(response) {
    const lista = document.querySelector('ul.res')
    
    response.forEach((item) => {
        // ESTILIZANDO A LINHA(LI) DA LISTA
        // const linhaLista = document.createElement('li.list-group-item')
        // linhaLista.classList.add('d-flex')
        // linhaLista.classList.add('justify-content-sm-between')
        // linhaLista.classList.add('list-group-item-secondary')
        // linhaLista.classList.add('align-items-center')

        // CRIANDO UM SPAN PARA ADICIONAR O VALOR NOME E EMAIL
        // const nome = document.createElement('span')
        // const email = document.createElement('span')
        // nome.innerHTML = item.nome
        // email.innerHTML = item.email

        const linha = document.createElement('div.card-body')
        const nome = document.createElement('h4')
        const email = document.createElement('span')
        const hr = document.createElement('hr')
        const btn_editar = document.createElement('button')
        const btn_excluir = document.createElement('button')
        btn_excluir.classList.add('btn')
        btn_excluir.classList.add('btn-danger')
        btn_excluir.classList.add('m')

        btn_editar.classList.add('btn')
        btn_editar.classList.add('btn-success')

        btn_excluir.innerHTML = 'Excluir'
        btn_editar.innerHTML = 'Editar'
        nome.innerHTML = item.nome
        email.innerHTML = item.email

        linha.appendChild(hr)
        linha.appendChild(nome)
        linha.appendChild(email)
        linha.appendChild(btn_editar)
        linha.appendChild(btn_excluir)
        res.appendChild(linha)
        

        //BUTÃO DE EDITAR
        // const btnEditar = document.createElement('button')
        // btnEditar.classList.add('btn')
        // btnEditar.classList.add('btn-success')  
        // btnEditar.innerHTML = 'Editar'
        btn_editar.addEventListener('click',() => {
            window.location.href=`../editarCliente/index.html?id=${item.id}`
            
        })

        //BUTÃO DE EXCLUIR
        // const btnExcluir = document.createElement('button')
        // btnExcluir.classList.add('btn')
        // btnExcluir.classList.add('btn-danger')  
        // btnExcluir.innerHTML = 'Excluir'
       btn_excluir.addEventListener('click', () =>{
            DeletarCliente(item.id)
            // LIMPANDO A TELA E RENDERIZANDO OS DADOS NOVAMENTE
            res.innerHTML = ''
            CaregarDados()
        })

        // ADICIONADNO O SPAN COM O VALOR DO NOME E OUTRO COM O VALOR DO EMIAL, OS BOTÕES DENTRO DA LINHA(LI) E ADICIONADO-A TUDO DENTRO DA LISTA(UL)
        // linhaLista.appendChild(nome)
        // linhaLista.appendChild(email)
        // linhaLista.appendChild(btnEditar)
        // linhaLista.appendChild(btnExcluir)
        // lista.appendChild(linhaLista)
    })
}

// DELETANDO UM REGISTRO
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