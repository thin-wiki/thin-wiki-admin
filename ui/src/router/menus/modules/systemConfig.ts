import type {MenuModule} from '/@/router/types';
// import { t } from '/@/hooks/web/useI18n';

const sysConfig: MenuModule = {
  orderNo: 21,
  menu: {
    path: '/sys',
    name: '系统设置',
    children: [
      {
        path: 'config',
        name: "系统设置",
      },
      {
        path: 'password',
        name: '修改密码',
      },
    ],
  },
};
export default sysConfig;
