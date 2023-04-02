import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes";
import connection from "./connectors/db-connector";
import cors from 'cors';

dotenv.config();
const app = express();

const initializer = () => app.listen(process.env.PORT , () => console.log(`Server is running on ${process.env.PORT}`))

const con = connection(initializer) ;

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/", routes);


