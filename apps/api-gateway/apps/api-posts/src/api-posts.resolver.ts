import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ApiPostsService } from './api-posts.service';
import { PostDto } from './dto/post.dto';
import { CreatePostResponse } from './types/posts.types';
import { Post } from './entities/post.entity';

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

  // @ResolveReference()
  // async resolveReference(reference: {
  //   _typename: string;
  //   id: string;
  // }): Promise<Post[]> {
  //   return await this.apiPostsService.getById(reference.id);
  // }
}
