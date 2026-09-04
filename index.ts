import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('¡Conexión exitosa a la base de datos CRM con TypeScript!');
        
        const result = await client.query('SELECT NOW()');
        console.log('Hora actual:', result.rows[0].now);
        
        client.release();
    } catch (err: any) {
        console.error('Error al conectar:', err.message);
    } finally {
        await pool.end();
    }
}

testConnection();