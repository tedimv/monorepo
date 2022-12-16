import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from '../dtos/createUserDto';
import { UpdateUserDto } from '../dtos/updateUserDto';
import { UsersService } from '../services/users';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  async get(@Param('id') id: string) {
    const user = await this.usersService.get({ where: { id: +id } });
    if (user) return user;
    throw new NotFoundException('User not found');
  }

  @Get()
  getAll(@Query('skip') skip = 0, @Query('take') take = 25): Promise<User[]> {
    return this.usersService.getAll({ skip, take });
  }

  @Post()
  async post(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create({ data: createUserDto });
  }

  @Patch('/:id')
  async patch(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update({
      data: updateUserDto,
      where: { id: +id }
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const deleted = await this.usersService.delete({ id: +id });
    console.log({ deleted });
    return deleted;
  }
}
