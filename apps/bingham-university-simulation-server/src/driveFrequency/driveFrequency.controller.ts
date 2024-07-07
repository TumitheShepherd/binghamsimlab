import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DriveFrequencyService } from "./driveFrequency.service";
import { DriveFrequencyControllerBase } from "./base/driveFrequency.controller.base";

@swagger.ApiTags("driveFrequencies")
@common.Controller("driveFrequencies")
export class DriveFrequencyController extends DriveFrequencyControllerBase {
  constructor(protected readonly service: DriveFrequencyService) {
    super(service);
  }
}
