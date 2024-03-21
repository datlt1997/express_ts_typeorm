import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { Like } from "typeorm";

export const s_create_user = async (req: Request, res: Response) => {
  const { name, phone, age, email, password } = req.body;
  const newUser = await User.save({
    name,
    phone,
    age,
    email,
    password
  })

  return newUser;
}

export const s_all_users = async() => {
  return await User.find({ relations: ['posts']});
}

export const s_get_user = async (req: Request) => {
  const { id } = req.params;
  const user =  await User.findOneBy({
    id: Number(id)
  })
  if(user?.id) return user;
  return "user not found";
}

export const s_search_user = async (req: Request) => {
  const { search } = req.body;
  return await User.find(
    {
      where: [
        {
          name: (Like(`%${search}%`))
        },
        {
          email: (Like(`%${search}%`))
        }
      ]
    })
}

export const s_delete_user = async (req: Request) => {
  const { id } = req.params;
  const user =  await User.findOneBy({
    id: Number(id)
  });
  if (user) {
    await User.remove(user);
    return true;
  }
  return false
}

export const s_update_user = async (req: Request) => {
  const { params: { id }, body} = req;
  await User.update({ id: Number(id) }, {...body} );
  return true;
}