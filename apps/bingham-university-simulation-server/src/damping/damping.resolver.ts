import * as graphql from "@nestjs/graphql";
import { DampingResolverBase } from "./base/damping.resolver.base";
import { Damping } from "./base/Damping";
import { DampingService } from "./damping.service";

@graphql.Resolver(() => Damping)
export class DampingResolver extends DampingResolverBase {
  constructor(protected readonly service: DampingService) {
    super(service);
  }
}
