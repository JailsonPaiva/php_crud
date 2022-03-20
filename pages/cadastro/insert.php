<?php 
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost;dbname=cadastros', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents('php://input'), true);

    // $numero = intval($data['numero']);

    if(isset($data['nome'])) {
        $sql = $pdo->prepare("INSERT INTO pessoa VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        $sql->execute(array($data['nome'],$data['cpf'],$data['celular'],$data['email'],$data['cep'],$data['numero'],$data['cidade'],$data['estado'],$data['bairro'],$data['rua'],$data['observacao'],$data['nascimento']));
        echo json_encode("dados enseridos com sucesso");
    }

?>

