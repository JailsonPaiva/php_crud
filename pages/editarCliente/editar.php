<?php
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost;dbname=cadastros', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // $data = json_decode(file_get_contents('php://input'), true);

    $id = intval($_GET['id']);
    // echo json_encode($_GET['id']);



    $sql = $pdo->prepare('SELECT * FROM pessoa WHERE id= :id');

    $sql->bindParam(':id', $id, PDO::PARAM_INT);

    $sql->execute();

    $usuarios = $sql->fetchAll();
    echo json_encode($usuarios);
