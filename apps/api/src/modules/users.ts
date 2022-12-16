import { Module } from '@nestjs/common';

import { UsersController } from '../controllers/users';
import { PrismaService } from '../services/prisma';
import { UsersService } from '../services/users';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
