
const sql = require('mssql'); 
const config = {
    user: process.env.User,
    password:  process.env.Password,
    server: process.env.Server, // You can use 'localhost\\instance' to connect to named instance
    database: process.env.Database,
 
    options: {
        encrypt: true // Use this if you're on Windows Azure ? 
    }
}




//const test = `select * from users where `;


/*
sql.connect(config, err => {
    // ... error checks
 
    // Query
 
    new sql.Request().query('select * from users', (err, result) => {
        // ... error checks
 
        console.dir(result)
    })
 
    // Stored Procedure
 
    new sql.Request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name', (err, result) => {
        // ... error checks
 
        console.dir(result)
    })
})





/*
const execSQL  = async (param)=>{

    try {
        await sql.connect(config);
        const result = await sql.query(param);

        console.dir(result.recordset);
        
        result.recordset.map((v,i,arr)=>{
            console.log(v);
        }); 
    
             

    } catch (err) {
        // ... error checks
    }

}

execSQL(`select * from users where dealercode=${1617}`); 
*/