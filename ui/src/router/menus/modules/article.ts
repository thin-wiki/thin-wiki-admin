import type {MenuModule} from '/@/router/types';

const article: MenuModule = {
  orderNo: 2,
  menu: {
    name: "文章管理",
    path: '/article',

    children: [
      {
        path: 'recycle',
        name: "回收站",
      },
    ],
  },
};
export default article;
