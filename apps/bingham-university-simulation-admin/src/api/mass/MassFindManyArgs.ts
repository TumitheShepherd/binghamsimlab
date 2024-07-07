import { MassWhereInput } from "./MassWhereInput";
import { MassOrderByInput } from "./MassOrderByInput";

export type MassFindManyArgs = {
  where?: MassWhereInput;
  orderBy?: Array<MassOrderByInput>;
  skip?: number;
  take?: number;
};
