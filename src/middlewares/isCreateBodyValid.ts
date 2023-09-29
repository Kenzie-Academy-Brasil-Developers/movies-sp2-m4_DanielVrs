import { NextFunction, Request, Response } from "express";

export const isCreateBodyValid = (req: Request, res: Response, next: NextFunction) => {
  const errors = [];

  if (!req.body.name) {
    errors.push("name is required");
  }
  if (req.body.name?.length > 50) {
    errors.push("name should note have more 50 characters");
  }
  if (!req.body.category) {
    errors.push("category is required");
  }
  if (req.body.category?.length > 20) {
    errors.push("category should note have more 20 characters");
  }
  if (!req.body.duration) {
    errors.push("duration is required");
  }
  if (!req.body.price) {
    errors.push("price is required");
  }

  if (errors.length > 0) {
    return res.status(409).json(errors);
  }

  return next();
};
