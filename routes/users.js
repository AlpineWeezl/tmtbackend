import { Router } from "express";
import { createNewUser, deleteUserById, getAllUsers, getUserById, setUserInactiveById, updateUserDetailsById } from "../controllers/users.js";

// Create Routers ---------------------------------------------------------------------
export const usersRouter = Router()


// Users -----------------------------------------------------------------------------

usersRouter     // all
    .route('/')
    .post(createNewUser)
    .get(getAllUsers)

usersRouter     // single
    .route('/:id')
    .get(getUserById)
    .put(updateUserDetailsById)
    .delete(deleteUserById)

usersRouter
    .route('/:id/setInactive')
    .put(setUserInactiveById)

// Associations ----------------------------------------------------------------------
// Companies -------------------------------------------------------------------------
// Seasontickets ---------------------------------------------------------------------
// Tickets ---------------------------------------------------------------------------
// Usages ----------------------------------------------------------------------------

