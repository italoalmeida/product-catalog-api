import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/domain/models/user.entity';

@Resolver(() => User)
export class SignInUserResolver {
  @Query(() => String)
  async signIn(): Promise<string> {
    return 'signIn';
  }
}
