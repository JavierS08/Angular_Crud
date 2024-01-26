const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jsc_funiboy_1508',
    port:3306,
    database: 'actividad_1'
});

module.exports = conexion;