import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LengthService } from "./length.service";
import { LengthControllerBase } from "./base/length.controller.base";

@swagger.ApiTags("lengths")
@common.Controller("lengths")
export class LengthController extends LengthControllerBase {
  constructor(protected readonly service: LengthService) {
    super(service);
  }
}
