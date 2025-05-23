import { IsEmail, IsInt, IsString, MinLength } from 'class-validator';

export class CreateClienteDto {
  @IsString() rut: string;
  @IsString() nombre: string;
  @IsEmail() email: string;
  @MinLength(6) password: string;
  @IsInt() ingresos: number;
}

export class LoginDto {
  @IsEmail() email: any;
  @MinLength(6) password: any;
}
