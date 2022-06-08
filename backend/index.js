import express from "express";
import db from "./config/database.js";
import anggaranRoutes from "./routes/index.js";
import cors from "cors";


const app = express();

try{
    await db.authenticate();
    console.log('database tersambung');
} catch(error){
    console.log('database error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/anggaran', anggaranRoutes);

app.listen(5000, () => console.log('Server jalan di port 5000'));
