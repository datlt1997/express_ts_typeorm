import { User } from "../entities/user.entity";

export  {}

declare global {
  namespace Express {
    interface Request {
      User_data: User;
    }
  }
}