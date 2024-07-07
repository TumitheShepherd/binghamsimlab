import { DriveFrequency as TDriveFrequency } from "../api/driveFrequency/DriveFrequency";

export const DRIVEFREQUENCY_TITLE_FIELD = "id";

export const DriveFrequencyTitle = (record: TDriveFrequency): string => {
  return record.id?.toString() || String(record.id);
};
