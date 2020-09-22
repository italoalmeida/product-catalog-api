import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Product } from 'src/domain/models/product.entity';
import { DeleteProductService } from './delete-product.service';

@Resolver(() => Product)
export class DeleteProductResolver {
  constructor(private deleteProductService: DeleteProductService) {}

  @Mutation(() => Product)
  async deleteProduct(@Args('id') id: number): Promise<Product> {
    return await this.deleteProductService.execute(id);
  }
}
