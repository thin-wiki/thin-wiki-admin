<template>
  <div class="md:flex">
    <template v-for="(item, index) in cardData" :key="item.title">
      <Card
        size="small"
        :loading="$attrs.loading"
        :title="item.title"
        class="md:w-1/4 w-full !md:mt-0 !mt-4"
        :class="[index + 1 < 4 && '!md:mr-4']"
        :canExpan="false"
      >

        <div class="py-4 px-4 flex justify-between">
          <CountTo prefix="" :startVal="0" :endVal="item.value" class="text-2xl"/>
          <Icon :icon="item.icon" :size="40" :color="item.color"/>
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';

import {CountTo} from '/@/components/CountTo/index';
import {Icon} from '/@/components/Icon';
import {Card} from 'ant-design-vue';
import {getTotal} from '/@/api/sys/dashboard';

export default defineComponent({
  components: {CountTo, Card, Icon},
  setup() {
    const cardData = ref<any>([{}, {}]);

    onMounted(() => {
      loadData();
    })

    function loadData() {
      getTotal().then(res => {
        const data = [];
        const columnCount = {
          'title': '类目数',
          'icon': 'fluent:column-triple-edit-24-filled',
          'value': res.columnCount,
          'total': res.columnCount,
          'color': 'green',
        }
        const articleCount = {
          'title': '文章数',
          'icon': 'ic:outline-article',
          'value': res.articleCount,
          'total': res.articleCount,
          'color': 'red',
          'action': '月',
        }

        data.push(columnCount);
        data.push(articleCount);

        cardData.value = data;
      })
    }

    return {cardData};
  },
});
</script>
