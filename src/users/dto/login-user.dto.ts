import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class LoginUserDto {

    _id: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
   
}
