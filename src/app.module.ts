import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from './config/orm.config';
import { ListProductModule } from './domain/features/list-product/list-product.module';
import { RemoveProductModule } from './domain/features/remove-product/remove-product.module';
import { SaveProductModule } from './domain/features/save-product/save-product.module';
import { SignInUserModule } from './domain/features/sign-in-user/sign-in-user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    }),
    SignInUserModule,
    SaveProductModule,
    ListProductModule,
    RemoveProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
