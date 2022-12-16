import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

import { PrismaService } from './prisma';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async get(query: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prismaService.user.findUnique(query);
  }

  async getAll(query: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prismaService.user.findMany(query);
  }

  async create(query: Prisma.UserCreateArgs): Promise<User> {
    const alreadyExists = await this.prismaService.user.findFirst({
      where: query.data
    });
    if (alreadyExists) throw new BadRequestException('User already exists');
    return this.prismaService.user.create(query);
  }

  async update(query: Prisma.UserUpdateArgs): Promise<User> {
    try {
      return await this.prismaService.user.update(query);
    } catch (error) {
      throw error;
    }
  }

  async delete(query: Prisma.UserWhereUniqueInput): Promise<User> {
    try {
      return await this.prismaService.user.delete({
        where: query
      });
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
