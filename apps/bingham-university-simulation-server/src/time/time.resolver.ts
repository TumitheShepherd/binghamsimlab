import * as graphql from "@nestjs/graphql";
import { TimeResolverBase } from "./base/time.resolver.base";
import { Time } from "./base/Time";
import { TimeService } from "./time.service";

@graphql.Resolver(() => Time)
export class TimeResolver extends TimeResolverBase {
  constructor(protected readonly service: TimeService) {
    super(service);
  }
}
