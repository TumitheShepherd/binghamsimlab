import * as graphql from "@nestjs/graphql";
import { DriveAmplitudeResolverBase } from "./base/driveAmplitude.resolver.base";
import { DriveAmplitude } from "./base/DriveAmplitude";
import { DriveAmplitudeService } from "./driveAmplitude.service";

@graphql.Resolver(() => DriveAmplitude)
export class DriveAmplitudeResolver extends DriveAmplitudeResolverBase {
  constructor(protected readonly service: DriveAmplitudeService) {
    super(service);
  }
}
