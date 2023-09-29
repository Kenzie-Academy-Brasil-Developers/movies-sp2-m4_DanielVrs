import { NextFunction, Request, Response } from "express";
import { QueryConfig } from "pg";
import { client } from "../database";

export const isMovieNameValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryString = `SELECT * FROM movies WHERE name= $1;`;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [req.body.name],
  };

  const query = await client.query(queryConfig);

  if (query.rows[0]) {
    return res.status(409).json({ message: "Movie name already exists!" });
  }

  return next();
};
