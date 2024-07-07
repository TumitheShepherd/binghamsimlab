import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DampingServiceBase } from "./base/damping.service.base";

@Injectable()
export class DampingService extends DampingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
