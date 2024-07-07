import { Module } from "@nestjs/common";
import { LengthModuleBase } from "./base/length.module.base";
import { LengthService } from "./length.service";
import { LengthController } from "./length.controller";
import { LengthResolver } from "./length.resolver";

@Module({
  imports: [LengthModuleBase],
  controllers: [LengthController],
  providers: [LengthService, LengthResolver],
  exports: [LengthService],
})
export class LengthModule {}
