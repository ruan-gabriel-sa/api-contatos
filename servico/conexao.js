import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'usuariocontato',
    password : 'senhacontato',
    database : 'contatos_bd'
})

export default pool;