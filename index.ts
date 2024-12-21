import * as cors  from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import router from "./src/router/router";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ["https://bucks-fe.vercel.app/", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => console.log("Server is running on port 3000"));