/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GravityCreateInput } from "./GravityCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateGravityArgs {
  @ApiProperty({
    required: true,
    type: () => GravityCreateInput,
  })
  @ValidateNested()
  @Type(() => GravityCreateInput)
  @Field(() => GravityCreateInput, { nullable: false })
  data!: GravityCreateInput;
}

export { CreateGravityArgs as CreateGravityArgs };
