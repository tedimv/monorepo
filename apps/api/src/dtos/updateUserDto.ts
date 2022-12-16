import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsPositive } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Unique username'
  })
  username!: string;
}
