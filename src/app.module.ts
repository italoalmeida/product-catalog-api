import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from './config/orm.config';
import CreateProductModule from './domain/features/create-product/create-product.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), CreateProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
