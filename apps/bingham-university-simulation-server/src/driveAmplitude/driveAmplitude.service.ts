import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DriveAmplitudeServiceBase } from "./base/driveAmplitude.service.base";

@Injectable()
export class DriveAmplitudeService extends DriveAmplitudeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
