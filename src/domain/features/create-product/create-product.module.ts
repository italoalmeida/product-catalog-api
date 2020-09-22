import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import { CreateProductResolver } from './create-product.resolver';
import CreateProductService from './create-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Product])],
  providers: [CreateProductService, CreateProductResolver],
  exports: [CreateProductService, CreateProductResolver],
})
class CreateProductModule {}

export default CreateProductModule;
