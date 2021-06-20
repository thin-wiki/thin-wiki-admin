import {defHttp} from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  ChangePasswordModel
} from './model/userModel';

import {ErrorMessageMode} from '/@/utils/http/axios/types';

enum Api {
  Login = '/api/pub/login',
  password = '/api/admin/user/password',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: user login api
 */
export function changePasswordApi(params: ChangePasswordModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<ChangePasswordModel>(
    {
      url: Api.password,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({url: Api.GetUserInfo});
}

export function getPermCode() {
  return defHttp.get<string[]>({url: Api.GetPermCode});
}
