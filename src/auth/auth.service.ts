import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
      private jwtService: JwtService) {}

    async signIn(loginUserDto: LoginUserDto): Promise<any> {
        const user = await this.usersService.findOne(loginUserDto); 

        if (!user) {
          throw new UnauthorizedException();
        }
        const payload = { userId: user._id, email: user.email };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
}
