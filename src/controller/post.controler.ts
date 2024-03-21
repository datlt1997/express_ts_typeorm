import { Request, Response } from "express";
import { s_all_posts, s_create_post, s_delete_post, s_get_post, s_update_post } from "../services/post.service";


export const all_post =  async (req: Request, res: Response) => {
  const result = await s_all_posts();
  return res.json(result);
}

export const create_post = async (req: Request, res: Response) => {
  const result = await s_create_post(req, res);
  return res.json(result);
}

export const get_post = async (req: Request, res: Response) => {
  const result = await s_get_post(req);
  return res.json(result);
}

export const delete_post = async (req: Request, res: Response) => {
  const result = await s_delete_post(req);
  if(result)
    return res.json("delete post success");
  return res.json("delete post fail");
}

export const update_post = async (req: Request, res: Response) => {
  const result = await s_update_post(req);
  return res.json(result);
}