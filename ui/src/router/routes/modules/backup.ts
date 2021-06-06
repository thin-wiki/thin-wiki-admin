import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const backup: AppRouteModule = {
  path: '/sys',
  name: '数据备份',
  component: LAYOUT,
  redirect: '/sys/backup',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: '数据备份',
  },
  children: [
    {
      path: 'backup',
      name: '数据备份',
      component: () => import('/@/views/sys/backup/index.vue'),
      meta: {
        title: '数据备份',
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default backup;
