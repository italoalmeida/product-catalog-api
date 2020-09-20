import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user.entity';
import { SignInUserResolver } from './sign-in-user.resolver';
import SignInUserService from './sign-in-user.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [SignInUserService, SignInUserResolver],
  exports: [SignInUserService, SignInUserResolver],
})
class SignInUserModule {}

export default SignInUserModule;
