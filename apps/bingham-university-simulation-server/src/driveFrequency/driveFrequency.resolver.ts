import * as graphql from "@nestjs/graphql";
import { DriveFrequencyResolverBase } from "./base/driveFrequency.resolver.base";
import { DriveFrequency } from "./base/DriveFrequency";
import { DriveFrequencyService } from "./driveFrequency.service";

@graphql.Resolver(() => DriveFrequency)
export class DriveFrequencyResolver extends DriveFrequencyResolverBase {
  constructor(protected readonly service: DriveFrequencyService) {
    super(service);
  }
}
