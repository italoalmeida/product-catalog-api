import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { Repository } from 'typeorm';

@Injectable()
class SaveProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  execute(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }
}

export default SaveProductService;
