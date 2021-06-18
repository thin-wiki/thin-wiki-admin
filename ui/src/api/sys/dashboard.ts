import {ErrorMessageMode} from "/@/utils/http/axios/types";
import {defHttp} from "/@/utils/http/axios";
import {DashboardTotal} from "/@/api/sys/model/dashboardModel";

enum Api {
  total = '/api/admin/dashboard/total',
}


export function getTotal(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<DashboardTotal>(
    {
      url: Api.total,
    },
    {
      errorMessageMode: mode,
    }
  );
}
