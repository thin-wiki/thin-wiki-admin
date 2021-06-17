<template>
  <BasicModal v-bind="$attrs" @register="register" :title="modelTitle" @ok="handleOk">
    <BasicForm @register="registerForm" :model="model"/>
  </BasicModal>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import {BasicModal, useModalInner} from '/@/components/Modal';
import {BasicForm, FormSchema, useForm} from '/@/components/Form/index';
import {useMessage} from "/@/hooks/web/useMessage";

const {createMessage} = useMessage();
import {updateStorage, addStorage,mainStorageOptionsApi} from '/@/api/sys/storage';

const schemas: FormSchema[] = [
  {
    field: 'id',
    component: 'Input',
    label: 'id',
    show: false,
  },
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    componentProps: {
      placeholder: '存储名称',
    },
    required: true,
  },
  {
    field: 'workType',
    component: 'Select',
    label: '工作模式',
    defaultValue: 'MAIN',
    componentProps: {
      options: [
        {
          label: '主存储',
          value: 'MAIN',
          key: 'MAIN',
        },
        {
          label: '备存储',
          value: 'BACKUP',
          key: 'BACKUP',
        },
      ],
    },
    required: true,
  },
  {
    field: 'mainStorageId',
    component: 'ApiSelect',
    label: '主节点',
    componentProps: {
      api: mainStorageOptionsApi,
      labelField: 'name',
      valueField: 'id',
      immediate: false,
      onChange: (e) => {
        console.log('selected:', e);
      },
      // atfer request callback
      onOptionsChange: (options) => {
        console.log('get options', options.length, options);
      },
    },
    required: true,
    ifShow: ({values}) => {
      return values.workType === 'BACKUP';
    },
  },
  {
    field: 'writable',
    component: 'Switch',
    label: '是否可写',
    defaultValue: true,
    componentProps: {
      placeholder: '是否可写',
    },
    required: true,
  },
  {
    field: 'description',
    component: 'InputTextArea',
    label: '描述',
    componentProps: {
      placeholder: '描述',
    },
  },

];
export default defineComponent({
  components: {BasicModal, BasicForm},
  setup(props, {emit}) {
    const modelRef = ref({});
    const modelTitle = ref<string>('');
    const [
      registerForm,
      {
        validate,
        resetFields,
      },
    ] = useForm({
      labelWidth: 120,
      schemas,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 24,
      },
    });
    const [register, {setModalProps, closeModal}] = useModalInner((data) => {
      if (data.id) {
        modelTitle.value = '编辑存储'
        modelRef.value = data;
      } else {
        modelTitle.value = "新增存储";
        resetFields();
      }
    });

    function handleOk() {
      try {
        validate().then(data => {
          console.log("success", data);
          setModalProps({
            loading: true,
            loadingTip: "提交中..."
          })
          if (data.id) {
            updateStorage(data).then(res => {
              setModalProps({
                loading: false,
              })
              closeModal()
              emit('submitData');
              createMessage.success('更新成功！');
            });
          } else {
            addStorage(data).then(res => {
              setModalProps({
                loading: false
              })
              closeModal()
              emit('submitData');
              createMessage.success('添加成功！');
            });
          }
        })
      } catch (error) {
      }
    }

    return {register, schemas, registerForm, model: modelRef, modelTitle, handleOk};
  },
});
</script>
