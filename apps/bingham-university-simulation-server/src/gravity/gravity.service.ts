import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GravityServiceBase } from "./base/gravity.service.base";

@Injectable()
export class GravityService extends GravityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
