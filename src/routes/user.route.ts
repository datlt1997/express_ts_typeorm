import express from "express";
import { all_users, create_user } from "../controller/user.controler";

export const user_route = express.Router();

user_route.get("/", all_users)

user_route.post("/create", create_user)