import { Module } from "@nestjs/common";
import { GravityModuleBase } from "./base/gravity.module.base";
import { GravityService } from "./gravity.service";
import { GravityController } from "./gravity.controller";
import { GravityResolver } from "./gravity.resolver";

@Module({
  imports: [GravityModuleBase],
  controllers: [GravityController],
  providers: [GravityService, GravityResolver],
  exports: [GravityService],
})
export class GravityModule {}
