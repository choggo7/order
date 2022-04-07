<script>
import mealsData from "../../assets/data/meals.json";
import DishesList from "./DishesList.vue";

export default {
  components: { DishesList },
  data() {
    return { meals: mealsData, category: "", isActive: false };
  },

  methods: {
    mealIcon: function (path) {
      return require(`../../assets/img/svg/${path}`);
    },
    getCategory: function (cat, id) {
      this.isActive = id;
      this.category = cat;
    },
  },

  mounted() {},

  computed: {
    CategoryFilter() {
      let filter = new RegExp(this.category, "i");
      return this.meals.filter((el) => el.category.name.match(filter));
    },
    filterCategory() {
      const filtered = this.meals.filter(function (a) {
        if (!this[a.category.name]) {
          this[a.category.name] = true;
          return true;
        }
      }, Object.create(null));
      return filtered;
    },
  },
};
</script>

<template>
  <section class="categories">
    <ul class="list">
      <li class="item" @click="getCategory()" id="all" >
        <img :src="require(`@/assets/img/svg/dish.png`)" alt="all" />
        <span class="name">all</span>
      </li>

      <li
        v-for="meal in filterCategory"
        :key="meal.id"
        class="item"
        :class="{ active: meal.id === isActive }"
        @click="getCategory(meal.category.name, meal.id)"
      >
        <img :src="mealIcon(meal.category.thumb)" :alt="meal.category.name" />
        <span class="name">{{ meal.category.name }}</span>
      </li>

      <li class="item">
        <i class="fas fa-plus"></i>
        <span class="name">all</span>
      </li>
    </ul>
  </section>

  <section class="dishes">
    <h2 class="title">Popular dishes</h2>
    <ul class="list">
      <li v-for="meal in CategoryFilter" :key="meal.id">
        <DishesList :dishe="meal" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.categories {
  padding: 4em 0em 4.5em;
  .list {
    @include flex(flex-start, unset);
    padding: 0px;
    margin: 0px;
    li.item {
      border: 2.5px solid $border_col;
      border-radius: 30px;
      padding: 3em 0px 20px;
      @include flex(flex-end, center);
      flex-direction: column;
      margin-right: 25px;
      gap: 1em;
      height: auto;
      width: 7.4em;
      text-transform: capitalize;
      img {
        width: 2em;
      }
      span.name {
        font-size: 18px;
        font-weight: 800;
      }
      &.active {
        border-color: $border_col_active;
        background-color: $category_active;
      }
    }
  }
}
section.dishes {
  text-align: left;
  h2.title {
    font-size: 30px;
    margin-bottom: 1.3em;
  }
  ul.list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 3em;
    padding: 0px;
    margin: 0px;
    list-style: none;
    li.item {
      max-width: 331px;
    }
  }
}
</style>