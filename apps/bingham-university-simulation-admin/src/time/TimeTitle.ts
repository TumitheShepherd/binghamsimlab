import { Time as TTime } from "../api/time/Time";

export const TIME_TITLE_FIELD = "id";

export const TimeTitle = (record: TTime): string => {
  return record.id?.toString() || String(record.id);
};
