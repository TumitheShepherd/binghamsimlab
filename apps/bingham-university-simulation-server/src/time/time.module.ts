import { Module } from "@nestjs/common";
import { TimeModuleBase } from "./base/time.module.base";
import { TimeService } from "./time.service";
import { TimeController } from "./time.controller";
import { TimeResolver } from "./time.resolver";

@Module({
  imports: [TimeModuleBase],
  controllers: [TimeController],
  providers: [TimeService, TimeResolver],
  exports: [TimeService],
})
export class TimeModule {}
