import { Args, Query, ResolveReference, Resolver } from '@nestjs/graphql';
import { ApiUsersService } from './api-users.service';
import { LoginResponse } from './types/user.types';
import { User } from './entities/user.entity';

@Resolver('User')
export class ApiUsersResolver {
  constructor(private readonly apiUsersService: ApiUsersService) {}

  @Query(() => LoginResponse)
  async getUserByEmail(@Args('email') email: string): Promise<LoginResponse> {
    const user = await this.apiUsersService.getUserByEmail(email);
    return { user };
  }

  @ResolveReference()
  async resolveReference(reference: {
    _typename: string;
    id: string;
  }): Promise<User> {
    return await this.apiUsersService.getUserByid(reference.id);
  }
}
