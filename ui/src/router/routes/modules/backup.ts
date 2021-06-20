import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const backup: AppRouteModule = {
  path: '/data',
  name: '数据备份',
  component: LAYOUT,
  redirect: '/data/backup',
  meta: {
    icon: 'ic:baseline-backup',
    title: '数据备份',
  },
  children: [
    {
      path: 'backup',
      name: '数据备份',
      component: () => import('/@/views/sys/backup/index.vue'),
      meta: {
        title: '数据备份',
        icon: 'ic:baseline-backup',
      },
    },
  ],
};

export default backup;
