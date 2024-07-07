import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GravityService } from "./gravity.service";
import { GravityControllerBase } from "./base/gravity.controller.base";

@swagger.ApiTags("gravities")
@common.Controller("gravities")
export class GravityController extends GravityControllerBase {
  constructor(protected readonly service: GravityService) {
    super(service);
  }
}
