import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Entity,
  UpdateDateColumn
} from 'typeorm';
import { Author } from './Author';
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

  @Field()
  @CreateDateColumn()
  public createdDate: Date;

  @Field()
  @UpdateDateColumn()
  public updatedDate: Date;

  @Field(type => Author)
  @ManyToOne(type => Author)
  author: Author;
  @RelationColumn()
  authorId: number;
}
