import { Length as TLength } from "../api/length/Length";

export const LENGTH_TITLE_FIELD = "id";

export const LengthTitle = (record: TLength): string => {
  return record.id?.toString() || String(record.id);
};
