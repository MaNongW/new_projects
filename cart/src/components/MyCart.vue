<template>
  <div class="cart">
    <cart-title :uname='uname'></cart-title>
    <cart-list :list='list' @change-num='changeNum($event)' @cart-del="delCart($event)"></cart-list>
    <cart-total :list='list'></cart-total>
  </div>
</template>

<script>

import CartTitle from './CartTitle'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default {
  // name: MyCart,
  components: {
    CartTitle,
    CartList,
    CartTotal
  },
  data() {
    return {
      uname: '张三',
      list: [{
        id: 1,
        name: 'TCL彩电',
        price: 1000,
        num: 1,
        img: require('../assets/img/a.jpg')
      },{
        id: 2,
        name: '机顶盒',
        price: 1000,
        num: 1,
        img: require('../assets/img/b.jpg')
      },{
        id: 3,
        name: '海尔冰箱',
        price: 2000,
        num: 1,
        img: require('../assets/img/c.jpg')
      },{
        id: 4,
        name: '小米手机',
        price: 3000,
        num: 1,
        img: require('../assets/img/d.jpg')
      },{
        id: 5,
        name: '华为笔记本',
        price: 7000,
        num: 1,
        img: require('../assets/img/e.jpg')
      }]
    }
  },
  methods: {
    changeNum(val) {
      //分为三种情况: 输入域变更、加号变更、减好变更
      if(val.type=='change') {
        //根据子组件传递过来的数据,更新list对应的数据
        this.list.some(item => {
          if(item.id == val.id) {
            item.num = val.num;
            //终止遍历
            return true;
          }
        });
      } else if(val.type=='sub') {
        //
        this.list.some(item => {
          if(item.id == val.id) {
            item.num -= 1;
            return true;
          }
        });
      } else if(val.type=='add') {
        //
        this.list.some(item => {
          if(item.id == val.id) {
            item.num += 1;
            return true;
          }
        });
      }
    },
    delCart(id) {
      //根据id删除list中对应的数据
      //1、找到id所对应数据的索引
      var index = this.list.findIndex(item => {
        return item.id = id;
      });
      //2、根据索引删除数据
      this.list.splice(index, 1);
    }
  },
}
</script>

<style >
  .container .cart {
    width: 300px;
    margin: auto;
  }

  .container .title {
    background-color: lightblue;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .container .total {
    background-color: #FFCE46;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .container .total button {
    margin: 0 10px;
    background-color: #DC4C40;
    height: 35px;
    width: 80px;
    border: 0;
  }

  .container .total span {
    color: red;
    font-weight: bold;
  }

  .container .item {
    height: 55px;
    line-height: 55px;
    position: relative;
    border-top: 1px solid #ADD8E6;
  }

  .container .item img {
    width: 45px;
    height: 45px;
    margin: 5px;
  }

  .container .item .name {
    position: absolute;
    width: 90px;
    top: 0;
    left: 55px;
    font-size: 16px;
  }

  .container .item .change {
    width: 100px;
    position: absolute;
    top: 0;
    right: 50px;
  }

  .container .item .change a {
    font-size: 20px;
    width: 30px;
    text-decoration: none;
    background-color: lightgray;
    vertical-align: middle;
  }

  .container .item .change .num {
    width: 40px;
    height: 25px;
  }

  .container .item .del {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    text-align: center;
    font-size: 40px;
    cursor: pointer;
    color: red;
  }
</style>