import { Request } from "express"
import { User } from "../entities/user.entity";
import jwt from 'jsonwebtoken';

export const s_login = async (req: Request) => {
  const { email, password } = req.body;
  const check_user = await User.findOneBy({ email: email, password: password});
  if (check_user) {
    const token = jwt.sign({
      userId:check_user.id
    }, 'check_user', { expiresIn: '15s'})
    return {
      user: check_user,
      token,
      message: "login successfull"
    }
  }
  return {
    user: null,
    token: null,
    message: "login fail"
  } 
}

export const s_signup = async (req: Request) => {
  const { email, password, phone, age } = req.body;
  const check_user = await User.findOneBy({ email: email });
  if (check_user) {
    return {
      message: "user is exist",
      state: false
    }
  }

  const user = await User.save({ email, password, phone, age})
  const token = jwt.sign({
    userId:user.id
  }, 'check_user', { expiresIn: '15s'})
  return {
    token,
    user,
    message: "sign up success",
    state: true
  } 
}