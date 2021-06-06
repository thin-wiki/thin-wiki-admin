<template>
  <PageWrapper
    title="网站配置"
  >
    <BasicForm @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
import { BasicForm, useForm } from '/@/components/Form';
import {defineComponent, onMounted} from "vue";
import { schemas } from './data';
import { useMessage } from '/@/hooks/web/useMessage';
import { PageWrapper } from '/@/components/Page';
import { getSysConfig, updateSysConfig } from '/@/api/sys/config';
export default defineComponent({
  components: { BasicForm, PageWrapper },

  setup() {


    const { createMessage } = useMessage();

    const [register, { validate, setProps,getFieldsValue,setFieldsValue }] = useForm({
      labelCol: {
        span: 7,
      },
      wrapperCol: {
        span: 10,
      },
      schemas: schemas,
      actionColOptions: {
        offset: 8,
      },
      submitButtonOptions: {
        text: '提交',
      },
      submitFunc: customSubmitFunc,
    });

    onMounted(() => {
      getSysConfig().then(res=>{
        setFieldsValue(res);
      })
    })

    async function customSubmitFunc() {
      console.log(getFieldsValue());

      try {
        const data = await validate();
        console.log(getFieldsValue());
        console.log(data);

        setProps({
          submitButtonOptions: {
            loading: true,
          },
        });

        updateSysConfig(data).then(res => {
          setProps({
            submitButtonOptions: {
              loading: false,
            },
          });
          createMessage.success('提交成功！');
        });

        setTimeout(() => {
          // setProps({
          //   submitButtonOptions: {
          //     loading: false,
          //   },
          // });
          // createMessage.success('提交成功！2');
        }, 2000);
      } catch (error) {}
    }
    return { register };
  },
});
</script>
<style lang="less" scoped>
.form-wrap {
  padding: 24px;
  background-color: @component-background;
}
</style>
