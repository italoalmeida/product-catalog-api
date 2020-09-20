import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import CreateProductService from './create-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Product])],
  providers: [CreateProductService],
  exports: [CreateProductService],
})
class CreateProductModule {}

export default CreateProductModule;
