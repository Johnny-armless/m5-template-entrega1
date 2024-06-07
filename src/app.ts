import express, { json } from "express";
import { taskRouter } from "./routes/tasks.routes";
import helmet from "helmet";

export const app = express();

app.use(json());
app.use(helmet());
app.use("/", taskRouter)