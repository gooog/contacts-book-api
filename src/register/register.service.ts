import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {

    constructor(@InjectModel(User.name) private userModel: Model<User>, 
                                        private usersService: UsersService) {}

    async register(createUserDto: CreateUserDto): Promise<User> {
        const user = {
            email: createUserDto.email,
            password: await this.hashPassword(createUserDto.password)
          };

          const createdUser = await this.userModel.create(user);
          return createdUser;
      }

     async hashPassword(plainString: string): Promise<string> {
        return bcrypt.hash(plainString, 7);
      }

}
