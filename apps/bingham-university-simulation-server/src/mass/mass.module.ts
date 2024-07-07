import { Module } from "@nestjs/common";
import { MassModuleBase } from "./base/mass.module.base";
import { MassService } from "./mass.service";
import { MassController } from "./mass.controller";
import { MassResolver } from "./mass.resolver";

@Module({
  imports: [MassModuleBase],
  controllers: [MassController],
  providers: [MassService, MassResolver],
  exports: [MassService],
})
export class MassModule {}
