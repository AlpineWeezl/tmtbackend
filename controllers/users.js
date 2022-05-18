import { pool } from "../db/pg.js";
import bcrypt from 'bcrypt'

/* ###################################################################################
Basic CRUD Operations
################################################################################### */


// Create ----------------------------------------------------------------------------

export const createNewUser = (req, res) => {
    const { username, password, email } = req.body;
    if (!(username && password)) { res.status(400).json({ error: "Data not formatted properly" }); }

    // const salt = await bcrypt.genSalt(10);
    // const encryptedPassword = bcrypt.hash(password, salt);

    pool
        .query('INSERT INTO users (username, password) VALUES ($1, $2);', [username, password])
        .then(data => res.status(201).json({ user: data }))
        .catch(err => res.status(500).json({ error: "Internal Server Error" }));
}

// Read ------------------------------------------------------------------------------

export const getAllUsers = (req, res) => {
    pool
        .query('SELECT * FROM users')
        .then(data => res.status(200).json({ users: data.rows }))
        .catch(err => res.status(500).json({ error: err }));
}

// Update ----------------------------------------------------------------------------

// Delete ----------------------------------------------------------------------------