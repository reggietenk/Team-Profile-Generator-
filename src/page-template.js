


module.exports = templateData => {
const {manager, engineer, ... intern } = templateData

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
          Featured 
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.name}</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.name}</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.name}</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>

      <div class="container" style="width: 18rem;">
        <div class="card-header">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>

    
</body>
</html>
    `
}