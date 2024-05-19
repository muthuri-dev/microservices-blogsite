import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  title: string;

  @Field()
  short_description: string;

  @Field()
  post: string;

  @Field()
  image: string;

  @Field(() => Int, { nullable: true })
  likes?: number;

  @Field({ nullable: true })
  comments_enabled?: boolean;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  user_id: string;
}
