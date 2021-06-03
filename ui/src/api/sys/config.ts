import {ErrorMessageMode} from "/@/utils/http/axios/types";
import {defHttp} from "/@/utils/http/axios";
import {SysConfigModel} from "/@/api/sys/model/configModel";

enum Api {
  setting = '/api/admin/config/system',
}


export function getSysConfig(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<SysConfigModel>(
    {
      url: Api.setting
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function updateSysConfig(params: SysConfigModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<SysConfigModel>(
    {
      url: Api.setting,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
