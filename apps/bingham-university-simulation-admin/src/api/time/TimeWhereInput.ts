import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TimeWhereInput = {
  id?: StringFilter;
  value?: FloatNullableFilter;
};
