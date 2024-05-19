import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { ApiPostsService } from './api-posts.service';
import { Post } from './entities/post.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postServive: ApiPostsService) {}
  @ResolveField(() => [Post])
  async post(@Parent() user: User): Promise<User[]> {
    return await this.postServive.getUserPosts(user.id);
  }
}
