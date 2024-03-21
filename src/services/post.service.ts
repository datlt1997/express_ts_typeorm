import { Request, Response } from "express";
import { Post } from "../entities/post.entity";
import { Like } from "typeorm";
import { User } from "../entities/user.entity";

export const s_all_posts = async() => {
  return await Post.find({ relations: ['user']});
}

export const s_create_post = async (req: Request, res: Response) => {
  const { title, content, user_id } = req.body;
  const user =  await User.findOne({ where: {id: user_id}});
  if (user) {
    const newpost = await Post.create({
      title,
      content,
    })
    newpost.user = user;
    const result = newpost.save();
    return result;

  }
  
}

export const s_get_post = async (req: Request) => {
  const { id } = req.params;
  const post =  await Post.findOne({
    where: { id: Number(id)}, relations: ['user']
  })
  if(post?.id) return post;
  return "post not found";
}

export const s_delete_post = async (req: Request) => {
  const { id } = req.params;
  const post =  await Post.findOneBy({
    id: Number(id)
  });
  if (post) {
    await Post.remove(post);
    return true;
  }
  return false
}

export const s_update_post = async (req: Request) => {
  const { params: { id }, body} = req;
  const post = await Post.findOne({where: {id: Number(id)}});
  if (post) {
    await Post.update({ id: Number(id) }, {...post, ...body} );
    return true;
  }
}