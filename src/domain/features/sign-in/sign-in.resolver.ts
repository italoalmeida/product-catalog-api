import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/domain/models/user.entity';
import { SignInInput } from './sign-in.input';
import { SignInService } from './sign-in.service';

@Resolver(() => User)
export class SignInResolver {
  constructor(private signInService: SignInService) {}

  @Query(() => String)
  async signIn(@Args('data') data: SignInInput): Promise<string> {
    return await this.signInService.execute(data.email, data.password);
  }
}
