import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { RemoveProductResolver } from './remove-product.resolver';
import { RemoveProductService } from './remove-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [RemoveProductService, RemoveProductResolver],
  exports: [RemoveProductResolver],
})
export class RemoveProductModule {}
