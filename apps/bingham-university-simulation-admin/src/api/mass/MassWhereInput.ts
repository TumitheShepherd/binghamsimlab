import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MassWhereInput = {
  id?: StringFilter;
  value?: FloatNullableFilter;
};
