import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

    constructor(private registerService: RegisterService){}

    @Post()
    async register(@Body() createUserDto: CreateUserDto) {
        const res = await this.registerService.register(createUserDto);

        return res;
    }
}
