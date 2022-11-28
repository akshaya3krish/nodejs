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
       const result = await sql.query
       `SET ROWCOUNT 1
       DELETE FROM Employee WHERE EmpFirstName='Riviya'
       SET ROWCOUNT 0`;
       return Promise.resolve(result);
    } catch (err) {
        return Promise.reject(err);
    }
};

conn().then(result => {
    console.log(`Record Deleted successfully: ${JSON.stringify(result)}`);
}).catch(err => {
    console.error(` In error : ${err}`);
});