import { Request, Response } from "express";
import { s_create_user } from "../services/user.service";
import { validationResult } from "express-validator";

export const all_users = async (req: Request, res: Response) => {
  return res.send({msg: "hello al usersssssdsdsd"})
}

export const create_user = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: true,
      errors: errors.array(),
      message: "There are some validation errors"
    })
  }
  const result = await s_create_user(req, res);
  return res.json(result);
} 