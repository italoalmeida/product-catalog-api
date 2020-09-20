import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/domain/models/user.entity';
import SignInUserService from './sign-in-user.service';

@Resolver(() => User)
export class SignInUserResolver {
  constructor(private signInUserService: SignInUserService) {}

  @Query(() => User)
  async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    return await this.signInUserService.signIn(email, password);
  }
}
