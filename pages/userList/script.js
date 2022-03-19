var ajax = new XMLHttpRequest();
ajax.open('GET', 'list.php');
ajax.responseType = 'json';
ajax.send();

ajax.addEventListener("readystatechange", () => {

    if (ajax.readyState === 4 && ajax.status == 200) {
        console.log(ajax);
        console.log(ajax.response)

        let res = ajax.response;
        // let list = document.querySelector('.list'); div a ser inseridos os dados recebidos

        for (let i = 0; i < res.length; i++) {
            list.innerHTML += "<li>"+res[i].innerHTML+"</li>";
        }
    }
})