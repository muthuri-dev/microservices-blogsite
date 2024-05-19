import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@ObjectType()
export class PostErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class CreatePostResponse {
  @Field(() => Post)
  post: Post;

  @Field(() => PostErrorType, { nullable: true })
  error?: PostErrorType;
}
