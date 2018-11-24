import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Resolver, Query, Root, FieldResolver } from 'type-graphql';
import { Post } from '../entities/Post';
import { Author } from '../entities/Author';

@Resolver(of => Post)
export class PostResolver {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>
  ) {}

  @Query(returns => [Post])
  posts(): Promise<Post[]> {
    return this.postRepository.find();
  }

  @FieldResolver()
  author(@Root() post: Post) {
    return this.authorRepository.findOne({ id: post.authorId });
  }
}
