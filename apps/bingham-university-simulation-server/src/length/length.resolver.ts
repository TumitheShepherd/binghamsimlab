import * as graphql from "@nestjs/graphql";
import { LengthResolverBase } from "./base/length.resolver.base";
import { Length } from "./base/Length";
import { LengthService } from "./length.service";

@graphql.Resolver(() => Length)
export class LengthResolver extends LengthResolverBase {
  constructor(protected readonly service: LengthService) {
    super(service);
  }
}
