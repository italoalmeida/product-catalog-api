import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from './config/orm.config';
import { SignInUserModule } from './domain/features/sign-in-user/sign-in-user.module';
import { CreateProductModule } from './domain/features/create-product/create-product.module';
import { UpdateProductModule } from './domain/features/update-product/update-product.module';
import { ListProductModule } from './domain/features/list-product/list-product.module';
import { DeleteProductModule } from './domain/features/delete-product/delete-product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    }),
    SignInUserModule,
    CreateProductModule,
    UpdateProductModule,
    ListProductModule,
    DeleteProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
