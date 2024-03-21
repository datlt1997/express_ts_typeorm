import express from "express";
import { user_route } from "./routes/user.route";
import "./database/db"
import { post_route } from "./routes/post.route";
import { auth_route } from "./routes/auth.route";
import { isAuthenticated } from "./middleware/isAuthenticated";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use("/api/auth", auth_route)
app.use(isAuthenticated)
app.use("/api/users", user_route)
app.use("/api/posts", post_route)


app.listen(3002, () => console.log("app running port 3002"))