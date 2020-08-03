let GenerateTeam = teamArr => {
        

    console.log('team array', teamArr)
  
    let card = ""  
    
    for(let i = 0; i < teamArr.length; i++) {
        let {name, role, email, id, finalQuestion} = teamArr[i]
       card+= `
        <div class="card col" style="width: 18rem;">
        <div class="card-body card-header">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Employee ID: ${id}</li>
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
    
             ${card}
    
                
            </div>
    
        </main>
    
    
    
    </body>
    
    </html>` 
}
 


module.exports = GenerateTeam;



