import { Resolver } from '@nestjs/graphql';
import { ApiUsersService } from './api-users.service';
import { ApiUser } from './entities/api-user.entity';

@Resolver(() => ApiUser)
export class ApiUsersResolver {
  constructor(private readonly apiUsersService: ApiUsersService) {}

  // @Mutation(() => ApiUser)
  // createApiUser(@Args('createApiUserInput') createApiUserInput: CreateApiUserInput) {
  //   return this.apiUsersService.create(createApiUserInput);
  // }
}
