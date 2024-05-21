import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field({ nullable: true })
  emailVerified?: Date;

  @Field()
  created_at: Date;

  @Field({ nullable: true })
  updated_at?: Date;
}
