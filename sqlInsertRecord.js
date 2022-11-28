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
       const result = await sql.query`INSERT INTO Employee(EmpID, EmpFirstName, EmpLastName, Address, City) VALUES (121, 'Riviya', 'Krishnan','Parrys','Chennai')` 
       return Promise.resolve(result);
    } catch (err) {
        return Promise.reject(err);
    }
};

conn().then(result => {
    console.log(`Record Inserted successfully: ${JSON.stringify(result)}`);
}).catch(err => {
    console.error(` In error : ${err}`);
});