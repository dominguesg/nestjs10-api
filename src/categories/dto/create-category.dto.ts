import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from '@nestjs/class-validator';

export class CreateCategoryDto {
  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string | null;
}
