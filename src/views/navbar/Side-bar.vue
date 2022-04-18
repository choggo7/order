<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import ordersData from "../../assets/data/orders.json";
export default {
  data() {
    return { orders: ordersData, total: 0 };
  },
  props: {},
  components: {},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
  methods: {
    mealIcon: function (path) {
      return require(`../../assets/img/${path}`);
    },
  },
  computed: {
    total_amount() {
      console.log(this.total);
      this.orders.map((order) => (this.total += order.price));
      return this.total;
    },
  },
};
</script>

<template>
  <div class="sidebar" :style="{ right: sidebarWidth }">
    <header>
      <ul>
        <li class="basket" @click="toggleSidebar">
          <i class="fas fa-box"></i>
          <span class="notification"> {{ orders.length }} </span>
        </li>
        <li class="avatar"><i class="fas fa-user-astronaut"></i></li>
        <li>sarah james</li>
      </ul>
    </header>
    <div class="orders">
      <div class="head">
        <h3 class="title">my order</h3>
        <div class="modify"><i class="fas fa-pen"></i></div>
      </div>
      <ul class="list">
        <li class="order" v-for="order in orders" :key="order.id">
          <div
            class="img"
            :style="{ 'background-image': `url( ${mealIcon(order.img)} )` }"
          ></div>
          <div class="content">
            {{ order.quantity }} <span class="x">x</span> {{ order.name }}
          </div>
          <div class="price">
            <span class="currency">DH</span> {{ order.price }}
          </div>
        </li>

        <li class="order deliver">
          <div class="img"><i class="fas fa-location-dot"></i></div>
          <div class="content">
            delevery <span class="time">30-40 min</span>
          </div>
          <div class="price">$5</div>
        </li>
      </ul>

      <div class="total">
        <div class="title">total amount</div>
        <div class="total-price">
          <span class="currency">DH</span> {{ total_amount }}
        </div>
      </div>
    </div>
    <div class="checkout"><button>checkout</button></div>
  </div>
  <span
    class="collapse-icon"
    :class="{ 'rotate-180': collapsed }"
    @click="toggleSidebar"
  >
    <i class="fas fa-angle-double-left" />
  </span>
</template>

<style lang="scss" scoped>
.sidebar {
  color: $color_font_1;
  font-size: 20px;
  text-align: start;
  background-color: $color_white;
  float: right;
  position: fixed;
  z-index: 1;
  top: 0;
  right: -200px;
  bottom: 0;
  padding: 1.5em 2em 0em 5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  min-width: 400px;
  max-height: 100%;
  height: 100%;
  -webkit-clip-path: ellipse(100% 110% at 100% 50%);
  clip-path: ellipse(100% 110% at 100% 50%);
  -webkit-box-shadow: 5px 10px #000;
  -moz-box-shadow: 5px 10px #000;
  -ms-box-shadow: 5px 10px #000;
  -o-box-shadow: 5px 10px #000;
  box-shadow: 5px 10px #000;

  header {
    margin-bottom: 3em;
    ul {
      display: flex;
      @include flex(flex-start,center);
      padding: 0px;
      margin: 0px;
      gap: 20px;
      li{
        text-transform: capitalize;
      }
    }
  }
  .orders {
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1em;
      h3 {
        font-size: 30px;
        color: $color_font_1;
        margin: 0px;
        text-transform: capitalize;
      }
      .modify {
        color: $color_font_2;
      }
    }
    ul.list {
      padding: 0px;
      margin: 0px;
      li {
        &.order {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0px;
          .img {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 75px;
            width: 120px;
            background-color: $bg_color_box;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .content {
            color: $color_font_1;
            text-align: left;
            flex-grow: 1;
            padding: 10px 25px;
            .x {
              color: $color_font_2;
            }
            .time {
              color: $icon_color;
            }
          }
          .price {
            color: $color_font_2;
            flex-grow: 1;
            text-align: right;
          }
        }
        &.deliver {
          border-top: 3px dashed $color_font_2;
          padding-top: 1.5em;
          margin-top: 1em;
          .img {
            color: $color_font_2;
            svg{
              height: 1.4em;
            }
          }
          .content {
            display: flex;
            flex-direction: column;
            .time {
              color: $icon_color;
            }
          }
        }
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5em;
    text-transform: capitalize;
    .title {
      font-size: 25px;
    }
    .total-price {
      font-size: 30px;
    }
  }
  .checkout {
    width: 100%;
    margin-top: auto;
    margin-bottom: 3em;
  }
  i.fas {
    color: $color_font_2;
  }
  ul {
    list-style: none;
  }
}
.collapse-icon {
  position: absolute;
  right: 10px;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  color: $color_font_2;
  z-index: 2;
  position: fixed;
  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
}
</style>