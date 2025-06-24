
import pkg from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.DB_URL });

async function createAdminGlobal() {
  try {
    const hashedPassword = await bcrypt.hash('adminjuniper', 10);
    console.log('Contraseña hasheada:', hashedPassword);

    const roleRes = await pool.query(
      'SELECT id FROM roles WHERE name = $1',
      ['admin_global']
    );

    if (roleRes.rows.length === 0) {
      throw new Error("Rol 'admin_global' no encontrado en la tabla roles.");
    }

    const roleId = roleRes.rows[0].id;

    const insertRes = await pool.query(
      'INSERT INTO users (email, password_hash, nickname, role_id, is_verified) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      ['admin@unibridge.edu.ec', hashedPassword, 'admin_global', roleId, true]
    );

    console.log('Usuario admin_global creado con ID:', insertRes.rows[0].id);
    process.exit(0);
  } catch (err) {
    console.error('Error al crear usuario admin_global:', err.message);
    process.exit(1);
  }
}

createAdminGlobal();
