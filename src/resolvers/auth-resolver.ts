import { Resolver, Mutation, Arg } from 'type-graphql';
import { User } from '../entities/User';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { AuthPayload, SignUpArgs, SignInArgs } from './models/Auth';
import * as jwt from 'jsonwebtoken';

@Resolver(of => User)
export class AuthResolver {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  @Mutation(returns => AuthPayload)
  async signUp(@Arg('input') input: SignUpArgs): Promise<AuthPayload> {
    const { email } = input;
    let user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      throw new Error('User already exists');
    }
    user = await this.userRepository.create(input);
    await this.userRepository.save(user);
    const payload = new AuthPayload();
    payload.token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.APP_SECRET
    );

    return payload;
  }
  @Mutation(returns => AuthPayload)
  async signIn(@Arg('input') input: SignInArgs): Promise<AuthPayload> {
    const { email, password } = input;
    const user = await this.userRepository.findOne({ where: { email } });
    const validPassword = await user.comparePassword(password);
    if (!user || !validPassword) {
      // TODO Use correct HTTP statuses
      throw new Error('Invalid credentials');
    }

    return {
      token: jwt.sign(
        { id: user.id, email: user.email },
        process.env.APP_SECRET
      )
    };
  }
}
