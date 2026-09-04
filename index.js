require('dotenv').config();
const { Pool } = require('pg');

// Crear la conexión usando las variables del archivo .env
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Probar la conexión
async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('¡Conexión exitosa a la base de datos CRM desde Node.js!');
        
        const result = await client.query('SELECT NOW()');
        console.log('Hora actual del servidor PostgreSQL:', result.rows[0].now);
        
        client.release();
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err.message);
    } finally {
        await pool.end();
    }
}

testConnection();