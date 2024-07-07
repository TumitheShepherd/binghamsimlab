import { Damping as TDamping } from "../api/damping/Damping";

export const DAMPING_TITLE_FIELD = "id";

export const DampingTitle = (record: TDamping): string => {
  return record.id?.toString() || String(record.id);
};
