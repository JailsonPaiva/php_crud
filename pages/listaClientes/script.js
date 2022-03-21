window.onload = () => {
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

function CriarLista(response) {
    const lista = document.querySelector('ul.res')
    
    response.forEach((item) => {
        // ESTILIZANDO A LINHA(LI) DA LISTA
        const linhaLista = document.createElement('li.list-group-item')
        linhaLista.classList.add('d-flex')
        linhaLista.classList.add('justify-content-sm-between')
        linhaLista.classList.add('list-group-item-secondary')
        linhaLista.classList.add('align-items-center')

        // CRIANDO UM SPAN PARA ADICIONAR O VALOR NOME E EMAIL
        const nome = document.createElement('span')
        const email = document.createElement('span')
        nome.innerHTML = item.nome
        email.innerHTML = item.email
        

        //BUTÃO DE EDITAR
        const btnEditar = document.createElement('button')
        btnEditar.classList.add('btn')
        btnEditar.classList.add('btn-success')  
        btnEditar.innerHTML = 'Editar'
        btnEditar.addEventListener('click',() => {
            window.location.href=`../editarCliente/index.html?id=${item.id}`
            
        })

        //BUTÃO DE EXCLUIR
        const btnExcluir = document.createElement('button')
        btnExcluir.classList.add('btn')
        btnExcluir.classList.add('btn-danger')  
        btnExcluir.innerHTML = 'Excluir'
        btnExcluir.addEventListener('click', () =>{
            DeletarCliente(item.id)
        })

        // ADICIONADNO O SPAN COM O VALOR DO NOME E OUTRO COM O VALOR DO EMIAL, OS BOTÕES DENTRO DA LINHA(LI) E ADICIONADO-A TUDO DENTRO DA LISTA(UL)
        linhaLista.appendChild(nome)
        linhaLista.appendChild(email)
        linhaLista.appendChild(btnEditar)
        linhaLista.appendChild(btnExcluir)
        lista.appendChild(linhaLista)
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