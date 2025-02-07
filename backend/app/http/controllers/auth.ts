import {
  Body,
  Controller,
  Dto,
  Get,
  Post,
  Transformable,
  Validate,
} from '@intentjs/core';
import { AuthService } from 'app/services/auth';
import { UserTransformer } from 'app/transformers/user';
import {
  LoginDto,
  RegisterDto,
  RequestPasswordChangeOtpDto,
  VerifyEmailDto,
} from 'app/validators/auth';

@Controller('auth')
export class AuthController extends Transformable {
  constructor(private auth: AuthService) {
    super();
  }

  @Post('register')
  @Validate(RegisterDto)
  async register(@Body() dto: RegisterDto) {
    console.log(dto);
    const user = await this.auth.register(dto);
    return this.item(user, new UserTransformer());
  }

  @Post('login')
  @Validate(LoginDto)
  async login(@Dto() dto: LoginDto) {
    const user = await this.auth.login(dto);
    return this.item(user, new UserTransformer());
  }

  @Get('verify-email')
  async verifyEmail(@Body() dto: VerifyEmailDto) {
    await this.auth.verifyEmail(dto);
  }

  @Post('forgot-password')
  @Validate(RequestPasswordChangeOtpDto)
  async forgotPassword(@Body() dto: RequestPasswordChangeOtpDto) {
    await this.auth.requestPasswordChangeOtp(dto);
    return {
      success: true,
      message: 'OTP sent to registered email!',
    };
  }
}
