<?php 

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">

    <title>Cadastro clientes</title>
</head>
<body>

  <div class="text-center">
    <img src="https://newm.com.br/svg/logo-new-m.svg" class="rounded" alt="Logo NewM">
    <h3>Cadastro de cliente</h3 >
  </div>

  <form action="" method="post">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Nome</label>
      <input type="text" class="form-control" placeholder="Digite o seu nome">
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Data de nascimento</label>
      <input type="text" class="form-control" placeholder="00/00/0000">
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">CPF</label>
      <input type="text" class="form-control" placeholder="000.000.000-00">
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Celular</label>
      <input type="text" class="form-control" placeholder="(00) 0 0000-0000">
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">E-mail</label>
      <input type="email" class="form-control" placeholder="name@example.com">
    </div>

    <section class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">CEP:</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="00.000-000">
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Número</label>
        <input type="number" class="form-control" id="inputPassword4" placeholder="N°">
      </div>

      <div class="col-md-6">
        <label for="inputCity" class="form-label">Cidade</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Estado</label>
        <input type="text" class="form-control" id="inputCity">
      </div>

      <div class="col-12">
        <label for="inputAddress" class="form-label">Endereço</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Rua ...">
      </div>
    </section>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Observações</label>
      <textarea class="form-control" rows="3"></textarea>
    </div>

    <div class="text-center">
      <button class="btn btn-success" type="submit">Cadastrar</button>
    </div>
  </form>

  <footer class="text-center">
    <span>&copy; Jailson Paiva</span>
  </footer>
</body>
</html>