import express from "express";
import connect from "./src/db/connect.js";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/users", userRoutes);

const server =async () =>{
    try {
        await connect();
        app.listen(port,()=>console.log("Server is running on port",port));
        
    } catch (error) {
        console.log("Failed connecting to server",error);
    }
}
server();
