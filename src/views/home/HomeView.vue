<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CategoriesList from "./CategoriesList.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CategoriesList,
  },
};
</script>

<template>
  <header>
    <h1 class="title">order with</h1>
    <p>we provide</p>
    <div class="delivery">
      <i class="fas fa-location-dot"></i>
      <input placeholder="enter delivery" type="search" />
      <button>find</button>
    </div>
  </header>
  <CategoriesList />

  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<style lang="scss" scoped>
header {
  height: 680px;
  padding-left: 8em;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 25px;
  background-color: #ebf8f2;
  // background-color: #11fa8d;
  h1.title {
    color: #303e5c;
  }
  .delivery {
    @include flex(center, center);
    min-width: 500px;
    min-height: 60px;
    svg {
      margin-right: -1em;
      color: #cce7da;
      z-index: 1;
    }
    input {
      height: 100%;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    button {
      height: 100%;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}
</style>