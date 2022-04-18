<script>
import mealsData from "../../assets/data/meals.json";

export default {
  setup() {},
  data() {
    return { meals: mealsData, quantity: 1 };
  },
  methods: {
    quantity_plus: function () {
      this.quantity++;
    },
    quantity_minus: function () {
      if (this.quantity == 1) {
        this.quantity = 1;
      } else {
        this.quantity--;
      }
    },
    mealIcon: function (path) {
      return require(`../../assets/img/${path}`);
    },
  },
  computed: {
    filteredList() {
      return this.meals.find((meal) => meal.id == this.$route.params.meal);
    },
  },
};
</script>


<template>
  <div class="meal">
    <div
      class="img"
      :style="{ 'background-image': `url( ${mealIcon(filteredList.img)} )` }"
    ></div>

    <div class="content">
      <h1 class="title">{{ filteredList.name }}</h1>
      <div class="price">
        <span class="currency">DH</span>
        {{ filteredList.price }}
      </div>
      <p class="description">{{ filteredList.description }}</p>

      <div class="container">
        <div class="quantity">
          <div class="btn minus" @click="quantity_minus">-</div>
          <input v-model="quantity" type="number" />
          <div class="btn plus" @click="quantity_plus">+</div>
        </div>
        <button class="checkout">checkout</button>
      </div>

      <p>{{ filteredList.ingrediants }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.meal {
  @include flex(stretch, flex-start);
  > div {
    width: 50%;
    height: 100%;
    &.img{
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      min-height: 30em;
    }
    &.content {
      padding: 1em 0px 0px 3em;
      > * {
        text-align: left;
        &.title {
          margin-bottom: 0.2em;
        }
        &.price {
          margin-bottom: 1em;
          font-size: 20px;
          font-weight: bold;
          color: $color_font_2;
        }
        &.description {
          color: $color_font_1;
        }
        &.container {
          @include flex(flex-start, center);
          gap: 20px;
          margin-bottom: 2.5em;
          .quantity {
            @include flex(stretch, stretch);
            input[type="number"] {
              -moz-appearance: textfield;
              appearance: textfield;
              border-radius: 0px;
              max-width: 4em;
              text-align: center;
            }
            .btn {
              @include flex;
              background-color: $icon_color;
              padding: 0.5em;
              cursor: pointer;
              &.plus {
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
              }
              &.minus {
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>