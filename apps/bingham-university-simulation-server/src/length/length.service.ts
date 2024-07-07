import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LengthServiceBase } from "./base/length.service.base";

@Injectable()
export class LengthService extends LengthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
