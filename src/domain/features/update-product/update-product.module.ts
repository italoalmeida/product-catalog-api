import { UpdateProductResolver } from './update-product.resolver';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { UpdateProductService } from './update-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [UpdateProductService, UpdateProductResolver],
  exports: [UpdateProductResolver],
})
export class UpdateProductModule {}
