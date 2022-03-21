<?php
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost;dbname=cadastros', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = $pdo->prepare('SELECT * FROM pessoa');
    $sql->execute();

    $usuarios = $sql->fetchAll();
    echo json_encode($usuarios);
