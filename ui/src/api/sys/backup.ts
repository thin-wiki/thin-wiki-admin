import {ErrorMessageMode} from "/@/utils/http/axios/types";
import {defHttp} from "/@/utils/http/axios";
import {BackupModel} from "/@/api/sys/model/backupModel";

enum Api {
  setting = '/api/admin/backup',
}


export function getBackupFiles(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<BackupModel>(
    {
      url: Api.setting
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function doBackup(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.setting
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function deleteBackupFile(fileName: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<any>(
    {
      url: Api.setting + "/" + fileName
    },
    {
      errorMessageMode: mode,
    }
  );
}
