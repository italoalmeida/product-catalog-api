import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './config/orm.config';
import { SignInModule } from './domain/features/sign-in/sign-in.module';
import { CreateProductModule } from './domain/features/create-product/create-product.module';
import { UpdateProductModule } from './domain/features/update-product/update-product.module';
import { ListProductModule } from './domain/features/list-product/list-product.module';
import { DeleteProductModule } from './domain/features/delete-product/delete-product.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    SignInModule,
    CreateProductModule,
    UpdateProductModule,
    ListProductModule,
    DeleteProductModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
