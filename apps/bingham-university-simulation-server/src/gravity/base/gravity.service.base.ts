/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Gravity as PrismaGravity } from "@prisma/client";

export class GravityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GravityCountArgs, "select">): Promise<number> {
    return this.prisma.gravity.count(args);
  }

  async gravities(args: Prisma.GravityFindManyArgs): Promise<PrismaGravity[]> {
    return this.prisma.gravity.findMany(args);
  }
  async gravity(
    args: Prisma.GravityFindUniqueArgs
  ): Promise<PrismaGravity | null> {
    return this.prisma.gravity.findUnique(args);
  }
  async createGravity(args: Prisma.GravityCreateArgs): Promise<PrismaGravity> {
    return this.prisma.gravity.create(args);
  }
  async updateGravity(args: Prisma.GravityUpdateArgs): Promise<PrismaGravity> {
    return this.prisma.gravity.update(args);
  }
  async deleteGravity(args: Prisma.GravityDeleteArgs): Promise<PrismaGravity> {
    return this.prisma.gravity.delete(args);
  }
}