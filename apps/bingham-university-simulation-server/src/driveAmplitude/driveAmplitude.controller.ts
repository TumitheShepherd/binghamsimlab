import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DriveAmplitudeService } from "./driveAmplitude.service";
import { DriveAmplitudeControllerBase } from "./base/driveAmplitude.controller.base";

@swagger.ApiTags("driveAmplitudes")
@common.Controller("driveAmplitudes")
export class DriveAmplitudeController extends DriveAmplitudeControllerBase {
  constructor(protected readonly service: DriveAmplitudeService) {
    super(service);
  }
}
