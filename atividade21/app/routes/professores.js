module.exports = function(app){
    app.get('/informacao/professores', function (req,res){
        res.render("informacao/professores");
    });
    
}

module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
 
       const sqlConfig = {
          user: 'BD2512008', //7 últimos dígitos do seu RA
           password: 'Teste1234',
           database: 'BD',
           server: 'APOLO',
           options: {
               encrypt: false,
               trustServerCertificate: true,
           }
       }
  
// 
      async function getProfessores() {
          try {
            let connection = app.config.dbconnection
              const pool = await sql.connection(sqlConfig);
          
               const results = await pool.request().query('SELECT * from PROFESSORES')
          
               //res.json(results.recordset);
 
              res.render('informacao/professores',{profs: results.recordset})
    
           } catch (err) {
               console.log(err)
          }
       }
      getProfessores();
   });
}