import { SortOrder } from "../../util/SortOrder";

export type MassOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
