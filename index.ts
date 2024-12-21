import * as dotenv from "dotenv";
import cors = require("cors");
import express = require( "express");
import router from "./src/router/router";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: ["https://bucks-fe.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => console.log("Server is running on port 3000"));