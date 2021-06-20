<template>
  <div class="p-4">
    <BasicTable
      title="存储管理"
      titleHelpMessage="存储管理"
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
              label: '复制',
              icon: 'ant-design:copy-filled',
              onClick: copyStorage.bind(null, record),
            },
            {
              label: '关联存储',
              icon: 'file-icons:binder',
              onClick: bindStorage.bind(null, record),
            },
            {
              label: '编辑',
              icon: 'akar-icons:edit',
              onClick: editStorage.bind(null, record),
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              color: 'error',
              popConfirm: {
                title:'您确定删除该记录么？',
                confirm: deleteStorage2.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <EditModel @register="editModelRegister" @submitData="loadData"/>
    <BindStorageModel @register="bindStorageModelRegister" @submitData="loadData"/>
    <CopyStorageModel @register="copyStorageModelRegister" @submitData="loadData"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {useModal} from '/@/components/Modal';
import {BasicColumn, BasicTable, TableAction} from '/@/components/Table';
import {getStorage, deleteStorage} from '/@/api/sys/storage';
import EditModel from './EditModel.vue';
import BindStorageModel from './BindStorageModel.vue';
import CopyStorageModel from './CopyStorageModel.vue';

export default defineComponent({
  components: {BasicTable, TableAction, EditModel, BindStorageModel, CopyStorageModel},
  setup() {
    const loading = ref(false);
    const [editModelRegister, {openModal: editOpenModel}] = useModal();
    const [bindStorageModelRegister, {openModal: bindStorageModel}] = useModal();
    const [copyStorageModelRegister, {openModal: copyStorageModel}] = useModal();

    const basicColumns = ref<BasicColumn[]>([
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '工作模式',
        dataIndex: 'workType',
        width: 150,
      },
      {
        title: '主存储名称',
        dataIndex: 'mainStorageName',
      },
      {
        title: '存储类型',
        dataIndex: 'refStorageType',
        width: 150,
      },
      {
        title: '存储',
        dataIndex: 'refStorageName',
      },
      // {
      //   title: '可写',
      //   dataIndex: 'writable',
      //   width: 200,
      // },
    ]);

    const tableData = ref<any>();

    const actionColumn = ref<any>({
      width: 300,
      title: '操作',
      dataIndex: 'action',
      slots: {customRender: 'action'},
    });

    onMounted(() => {
      loadData();
    })

    function loadData() {
      loading.value = true;
      getStorage().then(res => {
        tableData.value = res;
        loading.value = false;
      })
    }

    function openEditModel() {
      editOpenModel(true, {});
    }

    function deleteStorage2(record: Recordable) {
      loading.value = true;
      deleteStorage(record.id).then(res => {
        loading.value = false;
        loadData();
      })
    }

    function copyStorage(record: Recordable) {
      copyStorageModel(true, record);
    }

    function bindStorage(record: Recordable) {
      bindStorageModel(true, record);
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
      deleteStorage2,
      copyStorage,
      bindStorage,
      actionColumn,
      editModelRegister,
      editOpenModel,
      bindStorageModelRegister,
      bindStorageModel,
      copyStorageModelRegister,
      copyStorageModel,
      loadData,
    };
  },
});
</script>
