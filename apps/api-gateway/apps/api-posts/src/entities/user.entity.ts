import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
  @Field()
  id: string;

  @Field(() => [Post])
  posts?: Post[];
}
