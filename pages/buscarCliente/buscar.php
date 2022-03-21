<?php
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost;dbname=cadastros', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $data = json_decode(file_get_contents('php://input'), true);


    $email = $data['email'];

    $sql = $pdo->prepare('SELECT * FROM pessoa WHERE email like :email ');
    $sql->bindParam('email', $email);
    $sql->execute();

    $usuarios = $sql->fetchAll();
    echo json_encode($usuarios);

// select * from pessoa 
// where  email like '%a%';
