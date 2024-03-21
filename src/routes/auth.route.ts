import express from  "express";
import { login, signup } from "../controller/auth.controler";


export const auth_route = express.Router();

auth_route.post('/login', login);
auth_route.post('/signup', signup);
