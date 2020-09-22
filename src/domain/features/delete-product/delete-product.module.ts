import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { DeleteProductResolver } from './delete-product.resolver';
import { DeleteProductService } from './delete-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [DeleteProductService, DeleteProductResolver],
  exports: [DeleteProductResolver],
})
export class DeleteProductModule {}
