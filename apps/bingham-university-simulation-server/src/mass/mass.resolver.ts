import * as graphql from "@nestjs/graphql";
import { MassResolverBase } from "./base/mass.resolver.base";
import { Mass } from "./base/Mass";
import { MassService } from "./mass.service";

@graphql.Resolver(() => Mass)
export class MassResolver extends MassResolverBase {
  constructor(protected readonly service: MassService) {
    super(service);
  }
}
