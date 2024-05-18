import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
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
