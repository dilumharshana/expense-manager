import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes";
import connection from "./connectors/db-connector";

dotenv.config();
const app = express();

const initializer = () => app.listen(process.env.PORT , () => console.log(`Server is running on ${process.env.PORT}`))

const con = connection(initializer) ;

app.use(express.json())
app.use("/api/", routes);
