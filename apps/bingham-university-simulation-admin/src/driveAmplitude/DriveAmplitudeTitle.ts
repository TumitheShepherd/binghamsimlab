import { DriveAmplitude as TDriveAmplitude } from "../api/driveAmplitude/DriveAmplitude";

export const DRIVEAMPLITUDE_TITLE_FIELD = "id";

export const DriveAmplitudeTitle = (record: TDriveAmplitude): string => {
  return record.id?.toString() || String(record.id);
};
