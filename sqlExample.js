const sql = require('mssql');

const sqlConfigLocal = {
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

const conn = async () => {
    try {
        await sql.connect(sqlConfigLocal);
        //const result = await sql.query `select * from Employee`; 
        const result = await sql.query` SELECT EmpFirstName, City FROM Employee`;
        return Promise.resolve(result);
    } catch (err) {
        return Promise.reject(err);
    }
};

conn().then(result => {
    console.log(`Result is : ${JSON.stringify(result)}`);
}).catch(err => {
    console.error(` In error : ${err}`);
});