const teamHTML = (object) => {

  return object.map(function(e) {
    if (e.getRole() === 'Manager') {
    return `
    <div class="col-sm-6 col-md-4 my-2">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${e.name}</h3>
          <h4 class="card-subtitle">${e.getRole()}</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID number: ${e.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto: ${e.email}">${e.email}</a>
            </li>
            <li class="list-group-item">Office: ${e.office}</li>
          </ul>
        </div>
      </div>
    </div>`;
    } else if (e.getRole() === 'Engineer') {
      return `
      <div class="col-sm-6 col-md-4 my-2">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${e.name}</h3>
          <h4 class="card-subtitle">${e.getRole()}</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID number: ${e.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto: ${e.email}">${e.email}</a>
            </li>
            <li class="list-group-item">
              GitHub: <a href="https://github.com/${e.github}" target="_blank" rel="noopener norefer">${e.github}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;
    } else {
      return `
      <div class="col-sm-6 col-md-4 my-2">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${e.name}</h3>
          <h4 class="card-subtitle">${e.getRole()}</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID number: ${e.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto: ${e.email}">${e.email}</a>
            </li>
            <li class="list-group-item">School: ${e.school}</li>
          </ul>
        </div>
      </div>
    </div>`;
    }
  })
  .join('');

}


const generateHTML = (object) => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <title>Our Work Team</title>
  </head>
  <body>
    <header>
      <h1>Our Work Team</h1>
    </header>

    <main class="row justify-content-center">
      ${teamHTML(object)}
    </main>
  </body>
  </html>`
}


module.exports = generateHTML;