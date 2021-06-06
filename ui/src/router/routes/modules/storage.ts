import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const storage: AppRouteModule = {
  path: '/storage',
  name: '存储管理',
  component: LAYOUT,
  redirect: '/storage/index',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'index',
      name: '存储管理',
      component: () => import('/@/views/sys/storage/index.vue'),
      meta: {
        affix: true,
        title: "存储管理",
      },
    },
    {
      path: 'local',
      name: '本地存储',
      component: () => import('/@/views/sys/storage/local/index.vue'),
      meta: {
        title: "本地存储",
      },
    },
    {
      path: 'github',
      name: 'GitHub存储',
      component: () => import('/@/views/sys/storage/github/index.vue'),
      meta: {
        title: "GitHub存储",
      },
    },
    {
      path: 'gitee',
      name: 'Gitee存储',
      component: () => import('/@/views/sys/storage/gitee/index.vue'),
      meta: {
        title: "Gitee存储",
      },
    },
  ],
};

export default storage;
