import { Gravity as TGravity } from "../api/gravity/Gravity";

export const GRAVITY_TITLE_FIELD = "id";

export const GravityTitle = (record: TGravity): string => {
  return record.id?.toString() || String(record.id);
};
