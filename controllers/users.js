import { pool } from "../db/pg.js";
import bcrypt from 'bcrypt'

// ###################################################################################
// Basic CRUD Operations
// ###################################################################################


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
        .then(data => {
            if (data.rowCount == 0) {
                res.status(404).json({ error: `no user found` });
            } else {
                res.status(200).json({ users: data.rows });
            }
        })
        .catch(err => res.status(500).json({ error: err }));
}

export const getUserById = (req, res) => {
    const { id } = req.params;
    pool
        .query('SELECT * FROM users WHERE id = $1', [id])
        .then(data => {
            if (data.rowCount == 0) {
                res.status(404).json({ error: `cannot find user-ID ${id}` });
            } else {
                res.status(200).json({ user: data.rows[0] });
            }
        })
        .catch(err => res.status(500).json({ error: "Internal Server Error" }));
}

// Update ----------------------------------------------------------------------------

export const updateUserDetailsById = (req, res) => {
    const { id } = req.params;
    const { forename, lastname } = req.body;
}

export const setUserInactiveById = (req, res) => {

}

// Delete ----------------------------------------------------------------------------

export const deleteUserById = (req, res) => {
    const { id } = req.params;
    pool
        .query('DELETE FROM users WHERE id = $1', [id])
        .then(data => res.status(200).json({ message: `user-ID ${id} successfully deleted` }))
        .catch(err => res.status(500).json({ error: "Internal Server Error" }));
}