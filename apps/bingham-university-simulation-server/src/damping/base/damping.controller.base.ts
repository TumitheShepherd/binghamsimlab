/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DampingService } from "../damping.service";
import { DampingCreateInput } from "./DampingCreateInput";
import { Damping } from "./Damping";
import { DampingFindManyArgs } from "./DampingFindManyArgs";
import { DampingWhereUniqueInput } from "./DampingWhereUniqueInput";
import { DampingUpdateInput } from "./DampingUpdateInput";

export class DampingControllerBase {
  constructor(protected readonly service: DampingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Damping })
  async createDamping(
    @common.Body() data: DampingCreateInput
  ): Promise<Damping> {
    return await this.service.createDamping({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Damping] })
  @ApiNestedQuery(DampingFindManyArgs)
  async dampings(@common.Req() request: Request): Promise<Damping[]> {
    const args = plainToClass(DampingFindManyArgs, request.query);
    return this.service.dampings({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Damping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async damping(
    @common.Param() params: DampingWhereUniqueInput
  ): Promise<Damping | null> {
    const result = await this.service.damping({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Damping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDamping(
    @common.Param() params: DampingWhereUniqueInput,
    @common.Body() data: DampingUpdateInput
  ): Promise<Damping | null> {
    try {
      return await this.service.updateDamping({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Damping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDamping(
    @common.Param() params: DampingWhereUniqueInput
  ): Promise<Damping | null> {
    try {
      return await this.service.deleteDamping({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}