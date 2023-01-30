const sql = require('mssql');

const config = {
    user: 'akshaya003',
    password: 'welcome123',
    database: 'nodejs',
    server: 'localhost',
    options: {
        trustServerCertificate: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
};

const connection = async () =>{
    try {
        const pool = await sql.connect(config);
        return Promise.resolve(pool);
    } catch(err){
        return Promise.reject(err);
    }
}
exports.connection=connection;


/*const connection = async () =>{
    try {
        const pool = await sql.connect(config);
        const tableResult = await pool.request()
            .input('EmpID', sql.Int, value)
            .query('select * from Employee where id = EmpID')
            
        console.dir(tableResult)
        
        let result2 = await pool.request()
            .input('EmpID', sql.Int, value)
            .output('EmpFirstName', sql.VarChar(50))
            .execute('procedure_name')
        
        console.dir(result2)
    } catch(err){
        return (err);
    }
}*/