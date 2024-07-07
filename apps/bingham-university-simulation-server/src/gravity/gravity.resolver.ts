import * as graphql from "@nestjs/graphql";
import { GravityResolverBase } from "./base/gravity.resolver.base";
import { Gravity } from "./base/Gravity";
import { GravityService } from "./gravity.service";

@graphql.Resolver(() => Gravity)
export class GravityResolver extends GravityResolverBase {
  constructor(protected readonly service: GravityService) {
    super(service);
  }
}
