<script>
export default {
  props: ["dishe"],
  mounted() {
    console.log(this.data);
  },
  methods: {
    mealIcon: function (path) {
      return require(`../../assets/img/${path}`);
    },
  },
};
</script>

<template>
  <div
    class="img"
    :style="{ 'background-image': `url( ${mealIcon(this.dishe.img)} )` }"
  ></div>
  <h3 class="title">{{ this.dishe.name }}</h3>
  <div class="content">
    <span class="rate"> <i class="fas fa-star"></i> {{ this.dishe.rate }}</span>
    <span class="type">{{ this.dishe.type }}</span>
    <span class="category"> {{ this.dishe.category.name }} </span>
  </div>
</template>

<style lang="scss" scoped >
.img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 12.5em;
  border-radius: 30px;
}
h3.title {
  font-size: 20px;
  font-weight: 800;
  margin: 1em 0px 0.5em;
  text-transform: capitalize;
  color: $color_font_1;
}
.content {
  @include flex(flex-start, center);
  span {
    font-size: 15px;
    color: $color_font_2;
    text-transform: capitalize;
    @include flex;
    svg {
      margin-right: 3px;
      color: $color_font_2;
    }
    &::after {
      content: " ";
      display: block;
      background-color: $color_font_2;
      height: 2px;
      width: 2px;
      border-radius: 50%;
      margin: 0px 10px;
    }
    &:nth-last-child(1) {
      &::after {
        display: none;
      }
    }
  }
}
</style>