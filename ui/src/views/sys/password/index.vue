<template>
  <PageWrapper title="修改当前用户密码" content="修改成功后会自动退出当前登录！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { PageWrapper } from '/@/components/Page';
import { BasicForm, useForm } from '/@/components/Form';
import { formSchema } from './pwd.data';
import { changePasswordApi } from '/@/api/sys/user';
import {useMessage} from "/@/hooks/web/useMessage";
import router from '/@/router';
import {PageEnum} from "/@/enums/pageEnum";
export default defineComponent({
  name: 'ChangePassword',
  components: { BasicForm, PageWrapper },
  setup() {
    const { createMessage } = useMessage();
    const [register, { validate, resetFields }] = useForm({
      size: 'large',
      labelWidth: 100,
      showActionButtonGroup: false,
      schemas: formSchema,
    });
    async function handleSubmit() {
      try {
        const values = await validate();
        const { oldPassword, newPassword } = values;
        // TODO custom api
        console.log(oldPassword, newPassword);
        // const { router } = useRouter();
        // router.replace(PageEnum.BASE_HOME)
        changePasswordApi(values).then(res => {
          createMessage.success('密码修改成功！');
          router.replace(PageEnum.BASE_HOME);
        });
      } catch (error) {}
    }
    return { register, resetFields, handleSubmit };
  },
});
</script>
