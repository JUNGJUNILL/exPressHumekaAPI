var express = require('express');
var router = express.Router();


const sql = require('mssql'); 
const config = {
  user: 'sa',
  password: 'hubmeka',
  server: '221.150.127.102', // You can use 'localhost\\instance' to connect to named instance
  database: 'test123',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure ? 
    }
}

/*
router.get('/mssql', function(req, res, next) {

  sql.connect(config).then(() => {
    const test = `select * from users where dealerCode=${1617}`
   return selectSQL = sql.query(test);
}).then(result => {
  let rows = result.recordset
  //res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200).json(rows); 


  sql.close();
}).catch(err => {
  res.status(500).send({ message: `${err}`})
  sql.close();

})
 
sql.on('error', err => {
    // ... error handler
})



});
*/

router.get('/mssql', async (req, res, next)=>{

  try{

    await sql.connect(config)
    
    const sql01 = `select * from emp`;
    const sql02 = `select * from dept`;

    const sql01Result = await sql.query(sql01);
    const sql02Result = await sql.query(sql02);


    Promise.all([sql01Result,sql02Result]).then(message=>{
      res.status(200).json(message); 
      sql.close();
    });

  }catch(error){
    console.error(error); 
    res.status(500).send({ message: `${err}`})
    sql.close();


  }


})






/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
