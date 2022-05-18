import pkg from 'pg';

const { Pool } = pkg;

const connectionString = process.env.NODE_ELEPHANT_URL;

export const pool = new Pool({ connectionString });