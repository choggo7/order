<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import mealsData from "../../assets/data/meals.json";
import SidebarVue from "./Side-bar.vue";
export default {
  props: {},
  components: { SidebarVue },
  data() {
    return { meals: mealsData, search: "" };
  },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
  computed: {
    filteredList() {
      if (this.search != "") {
        return this.meals.filter((meal) => {
          console.log(meal);
          return meal.name.toLowerCase().includes(this.search.toLowerCase());
        });
      }
      return "";
    },
  },
};
</script>

<template>
  <nav>
    <div class="logo">order</div>
    <div class="search-container">
      <div class="search">
        <input type="search" v-model="search" placeholder="search" class="search" />
        <i class="fas fa-magnifying-glass"></i>
      </div>
      <ul class="result">
        <li v-for="res in filteredList" :key="res.id">
          <a href="#">{{ res.name }}</a>
        </li>
      </ul>
    </div>
    <div class="user-container">
      <div class="menu">
        <i class="fas fa-bars"></i>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
      <div class="basket" @click="toggleSidebar">
        <i class="fas fa-box-open"></i>
      </div>
      <div class="avatar"><i class="fas fa-user-astronaut"></i></div>
      <div class="name">sarah james</div>
    </div>
  </nav>
  <SidebarVue />
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 15px 35px;
  .logo {
    font-size: 35px;
    color: $color_font_1;
  }
  .search-container {
    position: relative;
    @include flex;
    flex-direction: column;
    width: 40em;
    .search {
      @include flex(flex-start, center);
      color: $color_font_1;
      font-size: 20px;
      height: 100%;
      width: 100%;
      &:focus-visible,:focus {
        border:1px solid #f7b500;
        outline: 0px;
      }
      svg {
        margin-left: -50px;
      }
    }
    ul.result {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: auto;
      background-color: #fff;
      margin: 0px;
      padding: 0px;
      list-style: none;
      text-align: left;
      top: 4em;
      li {
        padding: 0.5em 1.5em;
        a {
          text-decoration: none;
        }
      }
    }
  }
  .user-container {
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 25px;
      &.menu {
        font-size: 20px;
        width: 65px;
        height: 65px;
        @include flex;
        > svg {
          color: $color_font_1;
        }
        flex-grow: unset;
        ul {
          display: none;
        }
      }
      &.name {
        text-transform: capitalize;
        font-size: 20px;
      }
    }
  }
}
</style>
