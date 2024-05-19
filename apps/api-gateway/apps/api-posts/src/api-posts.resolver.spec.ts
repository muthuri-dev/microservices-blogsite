import { Test, TestingModule } from '@nestjs/testing';
import { ApiPostsResolver } from './api-posts.resolver';
import { ApiPostsService } from './api-posts.service';

describe('ApiPostsResolver', () => {
  let resolver: ApiPostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiPostsResolver, ApiPostsService],
    }).compile();

    resolver = module.get<ApiPostsResolver>(ApiPostsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
