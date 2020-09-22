import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.entity';
import { SaveProductResolver } from './save-product.resolver';
import { SaveProductService } from './save-product.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [SaveProductService, SaveProductResolver],
  exports: [SaveProductResolver],
})
export class SaveProductModule {}
