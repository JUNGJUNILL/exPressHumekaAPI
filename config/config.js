const config = {
    user: 'sa',
    password: 'hubmeka',
    server: '221.150.127.102', // You can use 'localhost\\instance' to connect to named instance
    database: 'test123',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure ? 
    }
}


module.exports = {
    config,
}