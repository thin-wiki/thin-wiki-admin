import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const setting: AppRouteModule = {
  path: '/sys',
  name: '系统配置',
  component: LAYOUT,
  redirect: '/sys/config',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: '系统配置',
  },
  children: [
    {
      path: 'config',
      name: '系统配置',
      component: () => import('/@/views/sys/config/index.vue'),
      meta: {
        title: '系统配置',
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default setting;
