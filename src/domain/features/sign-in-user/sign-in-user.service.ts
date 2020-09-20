import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
class SignInUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  signIn(email: string, password: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email, password },
    });
  }
}

export default SignInUserService;
