import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
      async findOne(loginUserDto: LoginUserDto): Promise<User> {
       
       const user = await this.userModel.findOne({email: loginUserDto.email});

       if(await bcrypt.compare(loginUserDto.password, user.password)) {
          return user;
       } else {
        throw new UnauthorizedException();
       }

      }
}
