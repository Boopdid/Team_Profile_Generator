function generateManagerCard(manager) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-header bg-primary">
    ${manager.name}</br>
    Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
  </ul>
</div>`;
}

function generateEngineerCard(engineer) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-header bg-primary">
    ${engineer.name}</br>
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
  </ul>
</div>`;
}

function generateInternCard(intern) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-header bg-primary">
    ${intern.name}</br>
    Intern
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a> </li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>`;
}

function generateHTML(teamMembers) {
  console.log(teamMembers);

  let teamCards = teamMembers
    .map(function (teamMember) {
      let role = teamMember.getRole();
      switch (role) {
        case "Manager":
          return generateManagerCard(teamMember);
        case "Engineer":
          return generateEngineerCard(teamMember);
        case "Intern":
          return generateInternCard(teamMember);
      }
    })
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>My Team</title>
  </head>

  <body>
    <h1 class="jumbotron bg-danger text-center">My Team</h1>

    <div class="d-flex justify-content-around">${teamCards}</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html>`;
}

module.exports = generateHTML;
