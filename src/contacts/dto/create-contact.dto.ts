import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreateContactDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    mobile: string;

    @IsEmail()
    email: string;

    @IsString()
    address: string;
}
