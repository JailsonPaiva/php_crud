<?php 
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost;dbname=cadastros', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if(isset($_POST['nome'])) {
        $sql = $pdo->prepare("INSERT INTO pessoa VALUES (null, ?, ?, ?, ?, ?, ?, ?)");

        $sql->execute(array($_POST['nome'], $_POST['nascimento'], $_POST['cpf'], $_POST['celular'], $_POST['email'], $_POST['cep'], $_POST['cidade'], $_POST['estado'], $_POST['bairro'], $_POST['rua'], $_POST['observacao']));
        echo json_encode("dados enseridos com sucesso");
    }

?>

