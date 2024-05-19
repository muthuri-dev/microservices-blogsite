import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class PostDto {
  @Field()
  @IsString({ message: 'Title must be string' })
  title: string;

  @Field()
  @IsString()
  short_description: string;

  @Field()
  @IsString()
  post: string;

  @Field()
  @IsString({ message: 'Enter image base 64 url' })
  @IsNotEmpty({ message: 'Url should not be empty' })
  image: string;

  @Field({ nullable: true })
  @IsNumber()
  likes?: number;

  @Field({ nullable: true })
  @IsBoolean()
  comments_enabled?: boolean;

  @Field({ nullable: true })
  user_id?: string;
}
