import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Resolver, Query, Authorized } from 'type-graphql';
import { Post } from '../entities/Post';

@Resolver(() => Post)
export class PostResolver {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>
  ) {}
  @Authorized()
  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return this.postRepository.find();
  }
}
