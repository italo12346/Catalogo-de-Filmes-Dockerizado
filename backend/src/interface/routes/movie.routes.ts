import { Router } from "express";
import { MovieController } from "../controllers/MovieController";

const movieRoutes = Router();
const movieController = new MovieController();

movieRoutes.post("/movies", (req, res) => movieController.create(req, res));
movieRoutes.get("/movies", (req, res) => movieController.list(req, res));

export { movieRoutes };
