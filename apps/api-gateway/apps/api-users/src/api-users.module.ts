import { Module } from '@nestjs/common';
import { ApiUsersService } from './api-users.service';
import { ApiUsersResolver } from './api-users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { PrismaService } from '../../../prisma/prisma.service';
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
  providers: [ApiUsersResolver, ApiUsersService, PrismaService, ConfigService],
})
export class ApiUsersModule {}
