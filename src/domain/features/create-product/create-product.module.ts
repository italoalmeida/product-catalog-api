import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { CreateProductResolver } from './create-product.resolver';
import { CreateProductService } from './create-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [CreateProductService, CreateProductResolver],
  exports: [CreateProductResolver],
})
export class CreateProductModule {}
