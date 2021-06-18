<template>
  <div class="p-4">
    <BasicTable
      title="回收站"
      titleHelpMessage="回收站"
      :columns="columns"
      :dataSource="data"
      :canResize="false"
      :loading="loading"
      :bordered="true"
      :pagination="true"
      :action-column="actionColumn"
    >
      <template #toolbar>
        <a-button type="error" @click="cleanRecycle">清空回收站</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '还原',
              icon: 'fa-solid:recycle',
              onClick: restoreArticle.bind(null, record),
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: deleteArticle.bind(null, record),
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
import {
  getRecycleArticles,
  deleteRecycleArticle,
  restoreRecycleArticles,
  cleanRecycleArticles
} from '/@/api/sys/article';

export default defineComponent({
  components: {BasicTable, TableAction},
  setup() {
    const loading = ref(false);

    const basicColumns = ref<BasicColumn[]>([
      {
        title: '文章id',
        dataIndex: 'id',
      },
      {
        title: '所属类目',
        dataIndex: 'columnTitle',
      },
      {
        title: '文章名称',
        dataIndex: 'title',
      },
      {
        title: '删除时间',
        dataIndex: 'lastModifiedDate',
        width: 200,
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
      getRecycleArticles().then(res=>{
        tableData.value = res;
        loading.value = false;
      })
    }

    function cleanRecycle() {
      loading.value = true;
      cleanRecycleArticles().then(res=>{
        loadData()
      })
    }

    function deleteArticle(record: Recordable) {
      loading.value = true;
      deleteRecycleArticle(record.id).then(res=>{
        loadData()
      })
    }

    function restoreArticle(record: Recordable) {
      loading.value = true;
      restoreRecycleArticles(record.id).then(res=>{
        loadData()
      })
    }

    return {
      columns: basicColumns,
      data: tableData,
      loading,
      cleanRecycle,
      deleteArticle,
      restoreArticle,
      actionColumn,
    };
  },
});
</script>
