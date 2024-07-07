import { Mass as TMass } from "../api/mass/Mass";

export const MASS_TITLE_FIELD = "id";

export const MassTitle = (record: TMass): string => {
  return record.id?.toString() || String(record.id);
};
