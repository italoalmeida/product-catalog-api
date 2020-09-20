import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from './config/orm.config';
import CreateProductModule from './domain/features/create-product/create-product.module';
import SignInUserModule from './domain/features/sign-in-user/sign-in-user.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
