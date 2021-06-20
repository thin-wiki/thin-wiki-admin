import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const setting: AppRouteModule = {
  path: '/sys',
  name: '系统配置',
  component: LAYOUT,
  redirect: '/sys/config',
  meta: {
    icon: 'ant-design:setting-outlined',
    title: '系统配置',
  },
  children: [
    {
      path: 'config',
      name: '系统配置',
      component: () => import('/@/views/sys/config/index.vue'),
      meta: {
        title: '系统配置',
        icon: 'ant-design:setting-outlined',
      },
    },
    {
      path: 'password',
      name: '修改密码',
      component: () => import('/@/views/sys/password/index.vue'),
      meta: {
        title: '修改密码',
        icon: 'ant-design:setting-outlined',
      },
    },
  ],
};

export default setting;
