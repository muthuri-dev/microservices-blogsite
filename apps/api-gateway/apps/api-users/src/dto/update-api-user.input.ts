import { CreateApiUserInput } from './create-api-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateApiUserInput extends PartialType(CreateApiUserInput) {
  @Field(() => Int)
  id: number;
}
