<template>
  <div id="app">
    <h2>你好吗</h2>
    <router-link to="/home" tag="button" replace active-class="active">text首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">text关于</router-link>
    <br>
    <button @click="homeClick">首页01</button>
    <button @click="aboutClick">关于01</button>
    <br>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HomeNews from './components/HomeNews'
import Home from './components/Home'
export default {
  name: 'APP',
  components: {Home, HomeNews},
  data() {
    return {
      userId: 'zhangsan',
      imgURL: 'http://www.baidu.com/logo.png'
    }
  }, 
  methods: {
    homeClick() {
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick() {
      this.$router.replace('/about')
      console.log('aboutClick');
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.98
        }
      })
    }
  },
}
</script>

<style scoped>
  .active {
    color: #f00;
  }
</style>