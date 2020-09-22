import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Product } from 'src/domain/models/product.entity';
import { SaveProductService } from './save-product.service';
import { ProductInput } from './product.input';

@Resolver(() => Product)
export class SaveProductResolver {
  constructor(private saveProductService: SaveProductService) {}

  @Mutation(() => Product)
  async saveProduct(
    @Args('data') productInput: ProductInput,
  ): Promise<Product> {
    const product = new Product();
    product.name = productInput.name;
    product.description = productInput.description;
    product.price = productInput.price;
    product.userId = productInput.userId;

    return await this.saveProductService.execute(product);
  }
}
