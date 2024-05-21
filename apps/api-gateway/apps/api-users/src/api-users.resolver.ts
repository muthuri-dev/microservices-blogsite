import { Args, Query, Resolver } from '@nestjs/graphql';
import { ApiUsersService } from './api-users.service';
import { LoginResponse } from './types/user.types';

@Resolver('User')
export class ApiUsersResolver {
  constructor(private readonly apiUsersService: ApiUsersService) {}

  @Query(() => LoginResponse)
  async getUserByEmail(@Args('email') email: string): Promise<LoginResponse> {
    const user = await this.apiUsersService.getUserByEmail(email);
    return { user };
  }
}
