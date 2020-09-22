import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
class ListProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  execute(): Promise<Product[]> {
    return this.productRepository.find();
  }

  getUser(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}

export default ListProductService;
