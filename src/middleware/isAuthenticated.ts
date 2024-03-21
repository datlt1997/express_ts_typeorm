import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/user.entity";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers['authorization']) {
    return res.status(400).json({ success:false, message: "no authentication header avaliable"});
  }
  const header:any = req.headers['authorization'];
  const method:string = header?.split(" ")[0];
  const token:string = header?.split(" ")[1];
  if (!method || !token)
    return res.status(400).json({ success: false, message: "Invalid auth header"})
  else if (method !== "Bearer")
    return res.status(400).json({ success: false, message: "Invalid auth method"})
  
  let tokenBody:any;
  try {
    tokenBody = jwt.verify(token, "check_user")
  } catch (err) {
    return res.status(400).json({ success: false, message: "Invalid token"});
  }

  if (!tokenBody.userId) return res.status(400).json({ success: false, message: "Invalid token"});

  const user = await User.findOneBy({ id: tokenBody.userId});
  if (!user) return res.status(400).json({ success: false, message: "user not found"});

  req.body.user_data = user;
  next();

}