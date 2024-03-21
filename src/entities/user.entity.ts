import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";


@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!:number
  
  @Column({ nullable: false, default: "new user"})
  name!: string

  @Column({ nullable: false})
  phone!: string

  @Column({ nullable: true})
  email!: string
 
  @Column({ nullable: true, default: "123456"})
  password!: string

  @Column({ nullable: false})
  age!: number

  @OneToMany(() => Post, (posts) => posts.user)
  posts!: Post[]
}