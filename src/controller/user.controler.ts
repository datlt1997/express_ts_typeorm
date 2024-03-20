import { Request, Response } from "express";
import { s_create_user } from "../services/user.service";

export const all_users = async (req: Request, res: Response) => {
  return res.send({msg: "hello al usersssssdsdsd"})
}

export const create_user = async (req: Request, res: Response) => {
  console.log(req.body)
  const result = await s_create_user(req, res);
  return res.json(result);
} 