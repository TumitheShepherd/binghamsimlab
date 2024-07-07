import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MassService } from "./mass.service";
import { MassControllerBase } from "./base/mass.controller.base";

@swagger.ApiTags("masses")
@common.Controller("masses")
export class MassController extends MassControllerBase {
  constructor(protected readonly service: MassService) {
    super(service);
  }
}
