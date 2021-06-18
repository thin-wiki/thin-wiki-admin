import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const article: AppRouteModule = {
  path: '/article',
  name: '文章管理',
  component: LAYOUT,
  redirect: '/article/recycle',
  meta: {
    icon: 'ri:article-line',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'recycle',
      name: '回收站',
      component: () => import('/@/views/sys/article/recycle/index.vue'),
      meta: {
        title: "回收站",
        icon: 'fa-solid:recycle',
      },
    },
  ],
};

export default article;
