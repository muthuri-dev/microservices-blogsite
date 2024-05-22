import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ApiPostsService } from './api-posts.service';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class Usersresolver {
  constructor(private readonly postsService: ApiPostsService) {}

  @ResolveField(() => [Post])
  public async posts(@Parent() user: User): Promise<Post[]> {
    return await this.postsService.getUserPosts(user.id);
  }
}
