import { SortOrder } from "../../util/SortOrder";

export type TimeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
