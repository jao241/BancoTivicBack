import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import "./typeorm";
import { errors } from "celebrate";
import routes from "./routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);
app.use(cors());
app.use(errors());

app.listen(port, ()=> console.log("API on in (http://localhost:3333)."));