import dotenv from "dotenv"

dotenv.config()

import pg from "pg"
const { Pool } = pg

const pool = new Pool(
    {
        connectionString: process.env.DB_CON_STRING
    }
)

export const query = (text, parms) => pool.query(text, parms)