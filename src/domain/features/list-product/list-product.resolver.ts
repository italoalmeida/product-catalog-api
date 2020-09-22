import { Resolver, Query, Parent, ResolveField } from '@nestjs/graphql';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import ListProductService from './list-product.service';

@Resolver(() => Product)
export class ListProductResolver {
  constructor(private listProductService: ListProductService) {}

  @Query(() => [Product])
  async listProduct(): Promise<Product[]> {
    return await this.listProductService.execute();
  }

  @ResolveField(() => User, { name: 'user' })
  async getUser(@Parent() product: Product): Promise<User> {
    return await this.listProductService.getUser(product.userId);
  }
}
