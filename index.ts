import * as dotenv from "dotenv";
import cors = require("cors");
import express = require( "express");
import router from "./src/router/router";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.get("/", (req, res: express.Response) => {res.send("Hello World!")});

app.listen(port, () => console.log("Server is running on port 3000"));