import {ErrorMessageMode} from "/@/utils/http/axios/types";
import {defHttp} from "/@/utils/http/axios";
import {LocalStorageModel} from "/@/api/sys/model/storageModel";

enum Api {
  local = '/api/admin/storage/local',
}


export function getLocalStorage(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<LocalStorageModel>(
    {
      url: Api.local
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function addLocalStorage(localStorage: LocalStorageModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LocalStorageModel>(
    {
      url: Api.local,
      params: localStorage
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function updateLocalStorage(localStorage: LocalStorageModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<LocalStorageModel>(
    {
      url: Api.local + "/" + localStorage.id,
      params: localStorage
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function deleteLocalStorage(id: number, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<LocalStorageModel>(
    {
      url: Api.local + "/" + id,
      params: localStorage
    },
    {
      errorMessageMode: mode,
    }
  );
}
