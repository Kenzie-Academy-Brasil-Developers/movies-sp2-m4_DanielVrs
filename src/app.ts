import "dotenv/config";
import express from "express";
import { connectDatabase } from "./database";
import { moviesRoutes } from "./routers/movies.routes";

const app = express();

app.use(express.json());

app.use("/movies", moviesRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await connectDatabase();
});
