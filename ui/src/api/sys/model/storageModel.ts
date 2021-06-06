export interface StorageModel {
  id: number;
  name: string;
  description: string;
  workType: string;
  refStorageType: string;
  refStorageId: number;
  refStorageName: string;
  mainStorageId: number;
  mainStorageName: string;
  writable: boolean;
  createdDate: string;
  lastModifiedDate: string;
}

export interface GithubStorageModel {
  id: number;
  name: string;
  description: string;
  token: string;
  owner: string;
  repo: string;
  branch: string;
  basePath: string;
  createdDate: string;
  lastModifiedDate: string;
}

export interface GiteeStorageModel {
  id: number;
  name: string;
  description: string;
  token: string;
  owner: string;
  repo: string;
  branch: string;
  basePath: string;
  createdDate: string;
  lastModifiedDate: string;
}

export interface LocalStorageModel {
  id: number;
  name: string;
  description: string;
  basePath: string;
  createdDate: string;
  lastModifiedDate: string;
}
