import { Injectable } from '@nestjs/common';
import CreateProductService from './domain/features/create-product/create-product.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
