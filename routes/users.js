import { Router } from "express";
import { createNewUser, getAllUsers, getUserById } from "../controllers/users.js";

// Create Routers ---------------------------------------------------------------------
export const usersRouter = Router()


// Users -----------------------------------------------------------------------------

usersRouter
    .route('/')
    .post(createNewUser)
    .get(getAllUsers)

usersRouter
    .route('/:id')
    .get(getUserById)

// Associations ----------------------------------------------------------------------
// Companies -------------------------------------------------------------------------
// Seasontickets ---------------------------------------------------------------------
// Tickets ---------------------------------------------------------------------------
// Usages ----------------------------------------------------------------------------

