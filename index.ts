import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from "./src/router/router";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => console.log("Server is running on port 3000"));