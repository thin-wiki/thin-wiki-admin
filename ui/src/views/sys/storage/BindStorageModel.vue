<template>
  <div>
    <BasicModal v-bind="$attrs" @register="register" :title="modelTitle" @ok="handleOk" width="800px">
      <RadioGroup button-style="solid" v-model:value="selectedStorage">
        <div class="storages">
          <span class="label">本地存储：</span>
          <template v-for="item in localStorages" :key="`${item.value}`">
            <Radio :value="item" class="storage-item">
              {{ item.name }}
            </Radio>
          </template>
        </div>
        <div class="storages">
          <span class="label">Github存储：</span>
          <template v-for="item in githubStorages" :key="`${item.value}`">
            <Radio :value="item" class="storage-item">
              {{ item.name }}
            </Radio>
          </template>
        </div>
        <div class="storages">
          <span class="label">Gitee存储：</span>
          <template v-for="item in giteeStorages" :key="`${item.value}`">
            <Radio :value="item" class="storage-item">
              {{ item.name }}
            </Radio>
          </template>
        </div>
      </RadioGroup>
    </BasicModal>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import {BasicModal, useModalInner} from '/@/components/Modal';
import {Radio} from 'ant-design-vue';
import {getLocalStorage, getGithubStorage, getGiteeStorage, bindStorage} from '/@/api/sys/storage';
import {useMessage} from "/@/hooks/web/useMessage";
const {createMessage} = useMessage();

export default defineComponent({
  components: {
    BasicModal,
    RadioGroup: Radio.Group,
    RadioButton: Radio.Button,
    Radio: Radio,
  },
  setup(props, {emit}) {

    const modelRef = ref({});
    const modelTitle = ref<string>('关联存储');
    const selectedStorage = ref({});
    const localStorages = ref<any>([]);
    const githubStorages = ref<any>([]);
    const giteeStorages = ref<any>([]);

    const [register, {setModalProps,closeModal}] = useModalInner((data) => {
      modelRef.value = data;
      loadStorages();
      // selectedStorage.value = modelRef.value.refStorageId;
      console.log(data)
      console.log(selectedStorage)
    });

    function loadStorages() {
      loadLocalStorages();
      loadGithubStorages();
      loadGiteeStorages();
    }

    function loadLocalStorages() {
      getLocalStorage().then(res => {
        localStorages.value = res.map((ele, index) => {
          ele.type='LOCAL';
          if(ele.id===modelRef.value.refStorageId){
            selectedStorage.value = ele;
          }
          return ele;
        });
      })
    }

    function loadGithubStorages() {
      getGithubStorage().then(res => {
        githubStorages.value = res.map((ele, index) => {
          ele.type='GITHUB';
          if(ele.id===modelRef.value.refStorageId){
            selectedStorage.value = ele;
          }
          return ele;
        });
      })
    }

    function loadGiteeStorages() {
      getGiteeStorage().then(res => {
        giteeStorages.value = res.map((ele, index) => {
          ele.type='GITEE';
          if(ele.id===modelRef.value.refStorageId){
            selectedStorage.value = ele;
          }
          return ele;
        });
      })
    }

    function handleOk() {
      setModalProps({
        loading: true,
        loadingTip: "提交中..."
      })
      console.log(selectedStorage.value)
      bindStorage(modelRef.value.id,selectedStorage.value.type,selectedStorage.value.id).then(res => {
        setModalProps({
          loading: false,
        })
        closeModal()
        emit('submitData');
        createMessage.success('更新成功！');
      });
    }

    return {
      register,
      model: modelRef,
      modelTitle,
      selectedStorage,
      localStorages,
      githubStorages,
      giteeStorages,
      handleOk
    };
  },
});
</script>

<style>
.storages {
  height: 40px;
}

.label {
  display: inline-block;
  width: 100px;
  text-align: right;
}

.storage-item {
  display: inline-block;
  min-width: 120px;
}
</style>
