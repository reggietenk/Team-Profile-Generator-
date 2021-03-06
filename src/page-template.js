function generateTeam() {
    

    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>My Team </title>
</head>
<body>
    <header>
        <h3>
            My Team
        </h3>

    </header>



    <div class="container" style="width: 18rem;">
        <div class="card-header">
          <p>Allen</p>
          <p>Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 1</li>
          <li class="list-group-item">Email: <a href="">allen@gmail.com</a></li>
          <li class="list-group-item">Office number: 1</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          <p>Henry</p>
          <p>Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 2</li>
          <li class="list-group-item">Email: <a href="">henry22@gmail.com</a> </li>
          <li class="list-group-item">GitHub: henry22</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          <p>Rachel</p>
          <p>Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 3</li>
          <li class="list-group-item">Email: <a href="">devRachel@aol.com</a> </li>
          <li class="list-group-item">Github: rachel81</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          <p>Jonah</p>
          <p>Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 4</li>
          <li class="list-group-item">Email : <a href="">jonahw@yahoo.com</a> </li>
          <li class="list-group-item">GitHub: jonahw</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          <p>John</p>
          <p>Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: 5</li>
          <li class="list-group-item">Email: <a href="">johnwick@gmail.com</a> </li>
          <li class="list-group-item">School: Uconn</li>
        </ul>
      </div>

    
</body>
</html>
    `
}

module.exports = generateTeam