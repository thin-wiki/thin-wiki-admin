import { FormSchema } from '/@/components/Form';

export const schemas: FormSchema[] = [
  {
    field: 'webSiteName',
    component: 'Input',
    label: '网站名称',
    defaultValue: 'Thin Wiki',
    componentProps: {
      placeholder: '网站名称',
    },
    required: true,
  },
  {
    field: 'webSiteKeywords',
    component: 'Input',
    label: '网站关键字',
    componentProps: {
      placeholder: '网站关键字',
    },
    required: true,
  },
  {
    field: 'webSiteDescription',
    component: 'InputTextArea',
    label: '网站描述',
    componentProps: {
      placeholder: '网站描述',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'resourceBaseUrlType',
    component: 'RadioGroup',
    label: '资源路径类型',
    // itemProps: {
    //   extra: '客户、邀评人默认被分享',
    // },
    componentProps: {
      options: [
        {
          label: '本地',
          value: 'local',
        },
        {
          label: 'jsdelivr',
          value: 'jsdelivr',
        },
      ],
    },
  },
];
