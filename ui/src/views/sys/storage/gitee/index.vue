<template>
  <div class="p-4">
    <BasicTable
      title="Gitee存储"
      titleHelpMessage="Gitee存储"
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
              label: '编辑',
              icon: 'ic:outline-delete-outline',
              onClick: editStorage.bind(null, record),
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: deleteStorage.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <EditModel @register="editModelRegister" @submitData="loadData"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {useModal} from '/@/components/Modal';
import {BasicColumn, BasicTable, TableAction} from '/@/components/Table';
import {getGiteeStorage, deleteGiteeStorage} from '/@/api/sys/storage';
import EditModel from './EditModel.vue';

export default defineComponent({
  components: {BasicTable, TableAction, EditModel},
  setup() {
    const loading = ref(false);
    const [editModelRegister, {openModal: editOpenModel}] = useModal();

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
        width: 190,
        sorter: true,
      },
    ]);

    const tableData = ref<any>();

    const actionColumn = ref<any>({
      width: 140,
      title: '操作',
      dataIndex: 'action',
      slots: {customRender: 'action'},
    });

    onMounted(() => {
      loadData();
    })

    function loadData() {
      loading.value = true;
      getGiteeStorage().then(res => {
        tableData.value = res;
        loading.value = false;
      })
    }

    function openEditModel() {
      editOpenModel(true, {});
    }

    function deleteStorage(record: Recordable) {
      loading.value = true;
      deleteGiteeStorage(record.id).then(res => {
        loading.value = false;
        loadData();
      })
    }

    function editStorage(record: Recordable) {
      editOpenModel(true, record);
    }

    return {
      columns: basicColumns,
      data: tableData,
      loading,
      openEditModel,
      editStorage,
      deleteStorage,
      actionColumn,
      editModelRegister,
      editOpenModel,
      loadData,
    };
  },
});
</script>
