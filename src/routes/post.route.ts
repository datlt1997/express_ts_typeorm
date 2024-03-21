import express from "express";
import { all_post, create_post, delete_post, get_post, update_post } from "../controller/post.controler";

export const post_route = express.Router();

post_route.get('/', all_post);

post_route.post("/", create_post)

post_route.get("/:id", get_post)

post_route.delete('/:id', delete_post)

post_route.put('/:id', update_post)