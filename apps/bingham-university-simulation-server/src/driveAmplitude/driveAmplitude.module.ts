import { Module } from "@nestjs/common";
import { DriveAmplitudeModuleBase } from "./base/driveAmplitude.module.base";
import { DriveAmplitudeService } from "./driveAmplitude.service";
import { DriveAmplitudeController } from "./driveAmplitude.controller";
import { DriveAmplitudeResolver } from "./driveAmplitude.resolver";

@Module({
  imports: [DriveAmplitudeModuleBase],
  controllers: [DriveAmplitudeController],
  providers: [DriveAmplitudeService, DriveAmplitudeResolver],
  exports: [DriveAmplitudeService],
})
export class DriveAmplitudeModule {}
