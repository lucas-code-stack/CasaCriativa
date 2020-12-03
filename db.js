const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./nwl.db')

db.serialize(function() {

    // Create table
      db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );
 `)

    // insert data into table
       const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
  `

    const values = [
        "https://www.flaticon.com/br/premium-icon/icons/svg/2871/2871276.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste",
        "https://www.instagram.com/lukas_spek/"
    ]
     db.run(query, values, function(err) {
       if (err) return console.log(err)

       console.log(this)
    }) */
    
    // delete data from table

      db.run(`DELETE FROM ideas WHERE id = ?`, [], function(err) {
        if(err) return console.log(err)

        console.log("Dado Deletado", this)
    }) 

    // consult data into table
     db.all(`SELECT * FROM ideas`, function(err,rows) {
        if(err) return console.log(err)

        console.log(rows)
   })

})

module.exports = db
