import type {MenuModule} from '/@/router/types';

const storage: MenuModule = {
  orderNo: 10,
  menu: {
    name: "存储管理",
    path: '/storage',

    children: [
      {
        path: 'index',
        name: "存储管理",
      },
      {
        path: 'local',
        name: '本地存储',
      },
      {
        path: 'github',
        name: 'GitHub存储',
      },
      {
        path: 'gitee',
        name: 'Gitee存储',
      },
    ],
  },
};
export default storage;
