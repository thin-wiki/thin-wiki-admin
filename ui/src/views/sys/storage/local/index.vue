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
        <a-button type="primary" @click="openEditModel">新增存储</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
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
  <EditModel @register="editModelRegister" />
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import { useModal } from '/@/components/Modal';
import {BasicColumn, BasicTable, TableAction} from '/@/components/Table';
import {getLocalStorage} from '/@/api/sys/storage';
import EditModel from './EditModel.vue';

export default defineComponent({
  components: {BasicTable, TableAction, EditModel},
  setup() {
    const loading = ref(false);
    const [editModelRegister, { openModal: editOpenModel }] = useModal();

    const basicColumns = ref<BasicColumn[]>([
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: 'basePath',
        dataIndex: 'basePath',
      },
      {
        title: '创建时间',
        dataIndex: 'createdDate',
        width: 200,
        sorter: true,
      },
    ]);

    const tableData = ref<any>();

    const actionColumn = ref<any>({
      width: 80,
      title: '操作',
      dataIndex: 'action',
      slots: {customRender: 'action'},
    });

    onMounted(() => {
      loadData();
    })

    function loadData() {
      loading.value = true;
      getLocalStorage().then(res => {
        tableData.value = res;
        loading.value = false;
      })
    }

    function openEditModel() {
      editOpenModel(true, {
        data: 'content',
        info: 'Info',
      });
    }

    function deleteBackup(record: Recordable) {
      loading.value = true;

    }

    return {
      columns: basicColumns,
      data: tableData,
      loading,
      openEditModel,
      deleteBackup,
      actionColumn,
      editModelRegister,
      editOpenModel,
    };
  },
});
</script>
