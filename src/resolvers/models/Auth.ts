import { InputType, Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AuthPayload {
  @Field()
  token: string;
  expires_in?: number;
}

@InputType()
export class SignUpArgs {
  @Field() firstName: string;
  @Field() lastName: string;
  @Field() password: string;
  @Field() email: string;
}

@InputType()
export class SignInArgs {
  @Field() email: string;
  @Field() password: string;
}

export interface AuthTokenPayload {
  id: number;
  email: string;
}
