import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;

  @Field(() => Float)
  readonly price: number;

  @Field(() => Int)
  readonly userId: number;
}
