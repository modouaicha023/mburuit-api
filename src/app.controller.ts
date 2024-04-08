import { Controller } from '@nestjs/common';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { LocalAuthGuard } from './auth/local-auth.guard';
// import { AuthService } from './auth/auth.service';
// import { Roles } from './auth/role.decorator';
// import { Role } from './auth/role.enum';
// import { RolesGuard } from './auth/roles.guard';
// import { Request as ExpressRequest } from 'express'; // Import the Request type from Express
// import { Client } from './client/schemas/client.schema';

@Controller()
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppController {
  // getHello(): any {
  //   throw new Error('Method not implemented.');
  // }
  // constructor(private authService: AuthService) {}
  // // eslint-disable-next-line @typescript-eslint/require-await
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req: ExpressRequest) { // Specify the type of req as ExpressRequest
  //   return this.authService.login(req.user as Client);
  // }
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req: ExpressRequest) { // Specify the type of req as ExpressRequest
  //   return req.user;
  // }
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Manager)
  // @Get('api/test/user')
  // getProtected() {
  //   return 'protected';
  // }
}
