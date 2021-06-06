import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '文件名',
      dataIndex: 'fileName',
    },
    {
      title: '大小',
      dataIndex: 'length',
    },
    {
      title: '备份日期',
      dataIndex: 'backupDate',
      width: 200,
      sorter: true,
    },
  ];
}

export function getBasicData() {
  const data: any = (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        fileName: 'John Brown',
        length: `1${index}`,
        lastModified: `${index + 10}`,
      });
    }
    return arr;
  })();
  return data;
}
