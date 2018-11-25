import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Entity,
  UpdateDateColumn
} from 'typeorm';
import { User } from './User';
import { RelationColumn } from '../helpers';

@Entity()
@ObjectType()
export class Post {
  constructor() {}
  @Field()
  @PrimaryGeneratedColumn()
  public readonly id: number;
  @Field()
  @Column()
  public title: string;

  @Field()
  @Column()
  public body: string;

  @Field({ description: 'Date Time the post was created' })
  @CreateDateColumn()
  public createdDate: Date;

  @Field()
  @UpdateDateColumn()
  public updatedDate: Date;

  // @Field(type => User)
  @ManyToOne(type => User)
  user: User;
  @RelationColumn()
  userId: number;
}
