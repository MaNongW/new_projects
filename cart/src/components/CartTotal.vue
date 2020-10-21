<template>
  <div class="total">
    <span>总价:{{total}}</span>
    <button>结算</button>
  </div>
</template>

<script>
export default {
  props: ['list'],
  computed: {
    total() {
      //计算商品的总价
      var t = 0;
      this.list.forEach(item => {
        t += item.price * item.num;
      });
      return t;
    }
  },
}
</script>