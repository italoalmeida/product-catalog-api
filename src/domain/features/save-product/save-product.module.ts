import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { User } from 'src/domain/models/user.entity';
import { SaveProductResolver } from './save-product.resolver';
import SaveProductService from './save-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Product])],
  providers: [SaveProductService, SaveProductResolver],
  exports: [SaveProductService, SaveProductResolver],
})
class SaveProductModule {}

export default SaveProductModule;
