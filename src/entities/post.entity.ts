import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!:number
  
  @Column({ nullable: false, default: "new post"})
  title!: string

  @Column({ nullable: false})
  content!: string

  @ManyToOne(() => User, (user) => user.posts)
  user!: User
}