import { UpdateProductService } from './update-product.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Product } from 'src/domain/models/product.entity';
import { UpdateProductInput } from './update-product.input';

@Resolver(() => Product)
export class UpdateProductResolver {
  constructor(private updateProductService: UpdateProductService) {}

  @Mutation(() => Product)
  async updateProduct(
    @Args('data') input: UpdateProductInput,
  ): Promise<Product> {
    const product = this.fromInputToEntity(input);
    return await this.updateProductService.execute(product);
  }

  fromInputToEntity(input: UpdateProductInput): Product {
    const product = new Product();
    product.id = input.id;
    product.name = input.name;
    product.description = input.description;
    product.price = input.price;
    product.userId = input.userId;
    return product;
  }
}
