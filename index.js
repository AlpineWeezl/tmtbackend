import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { techsRouter } from "./routes/techs.js";

// dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter)
// app.use('/api/categories', categoriesRouter)

app.listen(port, () => console.log(`The server is listening on port ${port}`));