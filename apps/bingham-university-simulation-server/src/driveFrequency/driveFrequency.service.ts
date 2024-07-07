import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DriveFrequencyServiceBase } from "./base/driveFrequency.service.base";

@Injectable()
export class DriveFrequencyService extends DriveFrequencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
