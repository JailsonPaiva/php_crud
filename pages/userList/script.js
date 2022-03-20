var ajax = new XMLHttpRequest();
ajax.open('GET', 'list.php');
ajax.responseType = 'json';
ajax.send();

ajax.onreadystatechange = function() {
    if (ajax.readyState === 4 && this.status === 200) {
        document.getElementById('res').innerHTML = this.response;
    }
}

window.onload = () => {
    let url = 'http://localhost/cadastro_clientes/pages/userList/list.php'

    let xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            CriarLista(response)
            console.log(JSON.parse(xhr.response))
        }
    }
    xhr.send();
}

// 

