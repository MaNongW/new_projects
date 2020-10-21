<template>
  <div>
    <div :key="item.id" v-for="item in list" class="item">
      <img :src="item.img">
      <div class="name">{{item.name}}</div>
      <div class="change">
        <a href="" @click.prevent="sub(item.id)">－</a>
        <input type="text" class="num" :value="item.num" @blur="changeNum(item.id,$event)">
        <a href="" @click.prevent="add(item.id)">＋</a>
      </div>
      <div class="del" @click="del(item.id)">×</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    changeNum(id, event) {
      this.$emit('change-num', {
        id: id,
        type: 'change',
        num: event.target.value
      });
    },
    sub(id) {
      this.$emit('change-num', {
        id: id,
        type: 'sub'
      });
    },
    add(id) {
      this.$emit('change-num', {
        id: id,
        type: 'add'
      });
    },
    del(id) {
      //把id传递给父组件
      this.$emit('cart-del', id);
    }
  },
}
</script>