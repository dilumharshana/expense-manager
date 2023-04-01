import express from "express";
import dotenv from "dotenv"
import routes from "./routes/routes"
import connection from './connectors/db-connector'

dotenv.config()
const app = express();


app.listen(process.env.PORT , () => console.log(`Server is running on ${process.env.PORT}`))

app.use("/api/",routes)

