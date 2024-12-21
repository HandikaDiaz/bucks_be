import * as cors  from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import router from "./src/router/router";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => console.log("Server is running on port 3000"));