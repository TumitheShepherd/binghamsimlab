import { GravityWhereInput } from "./GravityWhereInput";
import { GravityOrderByInput } from "./GravityOrderByInput";

export type GravityFindManyArgs = {
  where?: GravityWhereInput;
  orderBy?: Array<GravityOrderByInput>;
  skip?: number;
  take?: number;
};
