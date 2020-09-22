import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Product } from 'src/domain/models/product.entity';
import { CreateProductService } from './create-product.service';
import { CreateProductInput } from './create-product.input';

@Resolver(() => Product)
export class CreateProductResolver {
  constructor(private createProductService: CreateProductService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args('data') input: CreateProductInput,
  ): Promise<Product> {
    const product = this.fromInputToEntity(input);
    return await this.createProductService.execute(product);
  }

  fromInputToEntity(input: CreateProductInput): Product {
    const product = new Product();
    product.name = input.name;
    product.description = input.description;
    product.price = input.price;
    product.userId = input.userId;
    return product;
  }
}
