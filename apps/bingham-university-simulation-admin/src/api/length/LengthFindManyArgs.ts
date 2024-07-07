import { LengthWhereInput } from "./LengthWhereInput";
import { LengthOrderByInput } from "./LengthOrderByInput";

export type LengthFindManyArgs = {
  where?: LengthWhereInput;
  orderBy?: Array<LengthOrderByInput>;
  skip?: number;
  take?: number;
};
