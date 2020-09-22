import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import CreateProductService from './create-product.service';
import { ProductInput } from './product.input';

@Resolver(() => Product)
export class CreateProductResolver {
  constructor(private createProductService: CreateProductService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args('data') productInput: ProductInput,
  ): Promise<Product> {
    const product = new Product();
    product.name = productInput.name;
    product.description = productInput.description;
    product.price = productInput.price;
    product.userId = productInput.userId;

    return await this.createProductService.createProduct(product);
  }
}
