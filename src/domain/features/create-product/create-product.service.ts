import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
class CreateProductService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
}

export default CreateProductService;
