import { Module } from '@nestjs/common';
import { ApiPostsService } from './api-posts.service';
import { ApiPostsResolver } from './api-posts.resolver';
import { PrismaService } from '../../../prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  providers: [ApiPostsResolver, ApiPostsService, PrismaService, ConfigService],
})
export class ApiPostsModule {}
