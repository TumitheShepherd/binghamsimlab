import { Module } from "@nestjs/common";
import { DriveFrequencyModuleBase } from "./base/driveFrequency.module.base";
import { DriveFrequencyService } from "./driveFrequency.service";
import { DriveFrequencyController } from "./driveFrequency.controller";
import { DriveFrequencyResolver } from "./driveFrequency.resolver";

@Module({
  imports: [DriveFrequencyModuleBase],
  controllers: [DriveFrequencyController],
  providers: [DriveFrequencyService, DriveFrequencyResolver],
  exports: [DriveFrequencyService],
})
export class DriveFrequencyModule {}
