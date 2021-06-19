<template>
  <div class="p-4">
    <BasicTable
      title="数据备份"
      titleHelpMessage="数据备份"
      :columns="columns"
      :dataSource="data"
      :canResize="false"
      :loading="loading"
      :bordered="true"
      :pagination="true"
      :action-column="actionColumn"
    >
      <template #toolbar>
        <!--        <a-button type="primary" @click="toggleCanResize">-->
        <!--          {{ !canResize ? '自适应高度' : '取消自适应' }}-->
        <!--        </a-button>-->
        <a-button type="primary" @click="backupData">新增备份</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '下载',
              icon: 'ant-design:cloud-download-outlined',
              onClick: downloadBackup.bind(null, record),
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: deleteBackup.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {BasicColumn, BasicTable, TableAction} from '/@/components/Table';
import {getBackupFiles, doBackup, deleteBackupFile} from '/@/api/sys/backup';

export default defineComponent({
  components: {BasicTable, TableAction},
  setup() {
    const loading = ref(false);

    const basicColumns = ref<BasicColumn[]>([
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
        dataIndex: 'lastModified',
        width: 200,
        sorter: true,
      },
    ]);

    const tableData = ref<any>();

    const actionColumn = ref<any>({
      width: 150,
      title: '操作',
      dataIndex: 'action',
      slots: {customRender: 'action'},
    });

    onMounted(() => {
      loadData();
    })

    function loadData() {
      loading.value = true;
      getBackupFiles().then(res=>{
        tableData.value = res;
        loading.value = false;
      })
    }

    function backupData() {
      loading.value = true;
      doBackup().then(res=>{
        loadData()
      })
    }

    function deleteBackup(record: Recordable) {
      loading.value = true;
      deleteBackupFile(record.fileName).then(res=>{
        loadData()
      })
    }

    function downloadBackup(record: Recordable) {
      console.log(record);
      const url = '/backup/'+record.fileName;
      window.open(url);
    }

    return {
      columns: basicColumns,
      data: tableData,
      loading,
      backupData,
      deleteBackup,
      actionColumn,
      downloadBackup,
    };
  },
});
</script>
