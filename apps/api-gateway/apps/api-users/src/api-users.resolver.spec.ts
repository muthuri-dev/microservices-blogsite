import { Test, TestingModule } from '@nestjs/testing';
import { ApiUsersResolver } from './api-users.resolver';
import { ApiUsersService } from './api-users.service';

describe('ApiUsersResolver', () => {
  let resolver: ApiUsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiUsersResolver, ApiUsersService],
    }).compile();

    resolver = module.get<ApiUsersResolver>(ApiUsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
