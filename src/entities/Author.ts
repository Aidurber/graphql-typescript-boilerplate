import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  name: string;
}
