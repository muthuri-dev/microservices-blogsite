import { Test, TestingModule } from '@nestjs/testing';
import { ApiPostsService } from './api-posts.service';

describe('ApiPostsService', () => {
  let service: ApiPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiPostsService],
    }).compile();

    service = module.get<ApiPostsService>(ApiPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
