<?php 
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost;dbname=cadastros', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents('php://input'), true);

    $nome = $data['nome'];
    $cpf=$data['cpf'];
    $celular=$data['celular'];
    $email=$data['email'];
    $cep=$data['cep'];
    $numero=$data['numero'];
    $cidade=$data['cidade'];
    $estado=$data['estado'];
    $bairro=$data['bairro'];
    $rua=$data['rua'];
    $observacao=$data['observacao'];
    $nascimento=$data['nascimento'];
    $id=$data['id'];


    $sql = 'UPDATE pessoa SET nome = :nome WHERE id = :id';

    $sql = "UPDATE pessoa SET nome= :nome, cpf=  :cpf, celular= :celular, email= :email, cep= :cep, numero= :numero, cidade= :cidade, estado= :estado, bairro= :bairro, rua= :rua, observacao= :observacao, nascimento= :nascimento  WHERE id= :id";

    $sql_update = $pdo->prepare($sql);


    $sql_update->bindParam(':nome',$nome);
    $sql_update->bindParam(':cpf',$cpf);
    $sql_update->bindParam(':celular',$celular);
    $sql_update->bindParam(':email',$email);
    $sql_update->bindParam(':cep', $cep);
    $sql_update->bindParam(':numero',$numero);
    $sql_update->bindParam(':cidade', $cidade);
    $sql_update->bindParam(':estado', $estado);
    $sql_update->bindParam(':bairro', $bairro);
    $sql_update->bindParam(':rua', $rua);    
    $sql_update->bindParam(':observacao', $observacao);
    $sql_update->bindParam(':nascimento', $nascimento);
    $sql_update->bindParam(':id', $id, PDO::PARAM_INT);


    $res_update = $sql_update->execute();

    if($res_update) {
        echo json_encode('deu certo');
    } else {
        echo json_encode('deu não');
    }
