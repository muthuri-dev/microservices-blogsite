import { Module } from '@nestjs/common';
import { ApiUsersController } from './api-users.controller';
import { ApiUsersService } from './api-users.service';

@Module({
  imports: [],
  controllers: [ApiUsersController],
  providers: [ApiUsersService],
})
export class ApiUsersModule {}
