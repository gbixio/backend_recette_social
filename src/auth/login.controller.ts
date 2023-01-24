import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('login')
export class LoginController {
    constructor(private authService: AuthService){}
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Body() user: any){
    console.log(user)

        return this.authService.validateUser(user.email, user.password);
    }
}
