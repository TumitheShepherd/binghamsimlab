import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DampingService } from "./damping.service";
import { DampingControllerBase } from "./base/damping.controller.base";

@swagger.ApiTags("dampings")
@common.Controller("dampings")
export class DampingController extends DampingControllerBase {
  constructor(protected readonly service: DampingService) {
    super(service);
  }
}
