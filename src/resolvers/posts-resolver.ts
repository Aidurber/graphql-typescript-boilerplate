import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Resolver, Query } from 'type-graphql';
import { Post } from '../entities/Post';

@Resolver(of => Post)
export class PostResolver {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>
  ) {}

  @Query(returns => [Post])
  posts(): Promise<Post[]> {
    return this.postRepository.find();
  }
}
