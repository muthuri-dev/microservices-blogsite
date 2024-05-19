import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class Post {
  @Field()
  id: string;

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

  @Field(() => User)
  user?: User;

  @Field()
  user_id: string;
}
