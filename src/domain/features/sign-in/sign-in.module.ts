import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user.entity';
import { SignInResolver } from './sign-in.resolver';
import { SignInService } from './sign-in.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [SignInService, SignInResolver],
  exports: [SignInResolver],
})
export class SignInModule {}
