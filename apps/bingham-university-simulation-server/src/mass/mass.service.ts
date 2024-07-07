import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MassServiceBase } from "./base/mass.service.base";

@Injectable()
export class MassService extends MassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
