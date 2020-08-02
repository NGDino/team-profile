GenerateTeam = teamArr => {
    return  `
    <div class="card col" style="width: 18rem;">
    <div class="card-body card-header">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${finalQuestion}</li>
    </ul>
</div>`
}

return `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <nav class="navbar">
        <div class="navbar-header">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
    </nav>

    <main class="container">
        <div class="row">

         

            
        </div>

    </main>



</body>

</html> 
`

module.exports = teamData =>{
    console.log(teamData)
}

const {name, email, id, role}= teamData
