import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Product } from 'src/domain/models/product.entity';
import { RemoveProductService } from './remove-product.service';

@Resolver(() => Product)
export class RemoveProductResolver {
  constructor(private removeProductService: RemoveProductService) {}

  @Mutation(() => Product)
  async removeProduct(@Args('id') id: number): Promise<Product> {
    return await this.removeProductService.execute(id);
  }
}
