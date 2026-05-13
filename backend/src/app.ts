import express from "express";
import cors from "cors";
import { movieRoutes } from "./interface/routes/movie.routes";

const app = express();

app.use(cors()); 
app.use(express.json()); 

// Rotas da API
app.use("/api", movieRoutes);

export { app };
