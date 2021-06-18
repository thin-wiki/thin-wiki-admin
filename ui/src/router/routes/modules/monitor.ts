import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const monitor: AppRouteModule = {
  path: '/monitor',
  name: '系统监控',
  component: LAYOUT,
  redirect: '/monitor/index',
  meta: {
    icon: 'gg:performance',
    title: '系统监控',
  },
  children: [
    {
      path: 'index',
      name: '系统监控',
      component: IFrame,
      meta: {
        frameSrc: '/admin/performance',
        title: '系统监控',
        icon: 'gg:performance',
      },
    },
  ],
};

export default monitor;
