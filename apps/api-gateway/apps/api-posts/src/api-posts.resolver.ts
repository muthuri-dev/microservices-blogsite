import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
  Query,
} from '@nestjs/graphql';
import { ApiPostsService } from './api-posts.service';
import { PostDto } from './dto/post.dto';
import { CreatePostResponse } from './types/posts.types';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';

@Resolver(() => Post)
export class ApiPostsResolver {
  constructor(private readonly apiPostsService: ApiPostsService) {}

  @Mutation(() => CreatePostResponse)
  async createpost(
    @Args('postInput') postDto: PostDto,
  ): Promise<CreatePostResponse> {
    const post = await this.apiPostsService.createpost(postDto);
    return { post };
  }

  @Query(() => [Post])
  async getUserPosts(@Args('user_id') user_id: string): Promise<Post[]> {
    return await this.apiPostsService.getUserPosts(user_id);
  }

  @ResolveField(() => User)
  public async user(@Parent() post: Post): Promise<User | any> {
    return await { __typename: 'User', id: post.user_id };
  }
}
