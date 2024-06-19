import express from "express";
import router from "../router/products.router";
import { dataUser } from "../router/user.router";
import morgan from "morgan";
import { routerLogin } from "../router/login.router";
import bodyParser from "body-parser";
const app = express();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.json());


const intermedio = [router, dataUser, routerLogin];
app.use("/api/v1", ...intermedio);
export default app;
