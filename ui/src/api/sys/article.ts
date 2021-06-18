import {ErrorMessageMode} from "/@/utils/http/axios/types";
import {defHttp} from "/@/utils/http/axios";
import {ArticleRecycleModel} from "/@/api/sys/model/articleModel";

enum Api {
  recycle = '/api/admin/article/recycle',
  recycle_clean = '/api/admin/article/recycle/clean',
}


export function getRecycleArticles(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ArticleRecycleModel>(
    {
      url: Api.recycle
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function deleteRecycleArticle(articleId: number, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<ArticleRecycleModel>(
    {
      url: Api.recycle + "/" + articleId
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function restoreRecycleArticles(articleId: number, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<ArticleRecycleModel>(
    {
      url: Api.recycle + "/" + articleId + "/restore"
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function cleanRecycleArticles(mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<ArticleRecycleModel>(
    {
      url: Api.recycle_clean
    },
    {
      errorMessageMode: mode,
    }
  );
}
