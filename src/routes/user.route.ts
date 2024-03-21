import express from "express";
import {
  all_users,
  create_user,
  get_user,
  search_user,
  delete_user,
  update_user
} from "../controller/user.controler";
import { create_user_validation } from "../validations/user/create_user.validation";

export const user_route = express.Router();

user_route.get("/", all_users)

user_route.post("/create", create_user_validation(), create_user)

user_route.get("/:id", get_user)

user_route.post("/search", search_user)

user_route.delete('/:id', delete_user)

user_route.put('/:id', update_user)