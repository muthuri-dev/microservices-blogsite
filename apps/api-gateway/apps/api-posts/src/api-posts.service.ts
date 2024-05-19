import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostDto } from './dto/post.dto';

@Injectable()
export class ApiPostsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async createpost(postInput: PostDto) {
    const { title, post, short_description, image, comments_enabled, user_id } =
      postInput;

    if (
      !postInput.title ||
      !postInput.post ||
      !postInput.image ||
      !postInput.short_description
    ) {
      throw new BadRequestException('Fill all post fields please');
    }

    const createdPost = await this.prismaService.post.create({
      data: {
        title,
        post,
        short_description,
        image,
        likes: 0,
        comments_enabled,
        user_id,
      },
    });
    return createdPost;
  }
}
