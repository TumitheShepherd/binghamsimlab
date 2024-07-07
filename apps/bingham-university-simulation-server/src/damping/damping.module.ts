import { Module } from "@nestjs/common";
import { DampingModuleBase } from "./base/damping.module.base";
import { DampingService } from "./damping.service";
import { DampingController } from "./damping.controller";
import { DampingResolver } from "./damping.resolver";

@Module({
  imports: [DampingModuleBase],
  controllers: [DampingController],
  providers: [DampingService, DampingResolver],
  exports: [DampingService],
})
export class DampingModule {}
