import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import { ListProductResolver } from './list-product.resolver';
import ListProductService from './list-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product, User])],
  providers: [ListProductService, ListProductResolver],
  exports: [ListProductService, ListProductResolver],
})
class ListProductModule {}

export default ListProductModule;
