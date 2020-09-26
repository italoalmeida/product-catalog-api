import { ConfigService } from '@nestjs/config';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user.entity';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignInService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return this.createToken(user.id, email);
  }

  createToken(id: number, email: string) {
    const secret = this.configService.get('jwtSecret');
    return jwt.sign({ id, email }, secret, { expiresIn: '1d' });
  }
}
