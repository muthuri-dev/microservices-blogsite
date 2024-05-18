import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateApiUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
