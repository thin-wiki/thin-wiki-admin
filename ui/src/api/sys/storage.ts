import {ErrorMessageMode} from "/@/utils/http/axios/types";
import {defHttp} from "/@/utils/http/axios";
import {GithubStorageModel, LocalStorageModel} from "/@/api/sys/model/storageModel";

enum Api {
  local = '/api/admin/storage/local',
  github = '/api/admin/storage/github',
  gitee = '/api/admin/storage/gitee',
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
      url: Api.local + "/" + id
    },
    {
      errorMessageMode: mode,
    }
  );
}

// github
export function getGithubStorage(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<GithubStorageModel>(
    {
      url: Api.github
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function addGithubStorage(githubStorage: GithubStorageModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GithubStorageModel>(
    {
      url: Api.github,
      params: githubStorage
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function updateGithubStorage(githubStorage: GithubStorageModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<GithubStorageModel>(
    {
      url: Api.github + "/" + githubStorage.id,
      params: githubStorage
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function deleteGithubStorage(id: number, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<GithubStorageModel>(
    {
      url: Api.github + "/" + id
    },
    {
      errorMessageMode: mode,
    }
  );
}

//gitee
export function getGiteeStorage(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<GithubStorageModel>(
    {
      url: Api.github
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function addGiteeStorage(githubStorage: GithubStorageModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GithubStorageModel>(
    {
      url: Api.github,
      params: githubStorage
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function updateGiteeStorage(githubStorage: GithubStorageModel, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<GithubStorageModel>(
    {
      url: Api.github + "/" + githubStorage.id,
      params: githubStorage
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function deleteGiteeStorage(id: number, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<GithubStorageModel>(
    {
      url: Api.github + "/" + id
    },
    {
      errorMessageMode: mode,
    }
  );
}
