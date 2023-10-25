import { IsNotEmpty, IsString, IsEmail, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Length(2, 100)
    password: string;
   
}
