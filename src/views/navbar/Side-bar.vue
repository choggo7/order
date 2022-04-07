<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  props: {},
  components: {},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ right: sidebarWidth }">
    <header>
      <ul>
        <li class="basket" @click="toggleSidebar">
          <i class="fas fa-box"></i>
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
        <li class="order">
          <div class="img">img</div>
          <div class="content">1 x greek salad</div>
          <div class="price">$34</div>
        </li>
        <li class="order">
          <div class="img">img</div>
          <div class="content">1 x greek salad</div>
          <div class="price">$34</div>
        </li>
        <li class="order">
          <div class="img">img</div>
          <div class="content">1 x greek salad</div>
          <div class="price">$34</div>
        </li>
        <li class="order">
          <div class="img">img</div>
          <div class="content">1 x greek salad</div>
          <div class="price">$34</div>
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
        <div class="total-price">168$</div>
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
  padding: 2.5em 2em 2.5em 5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;
  min-width: 400px;
  max-height: 100%;
  height: 100%;
  -webkit-clip-path: ellipse(100% 110% at 100% 50%);
  clip-path: ellipse(100% 110% at 100% 50%);
  -webkit-box-shadow:  5px 10px #000;
  -moz-box-shadow: 5px 10px #000;
  -ms-box-shadow: 5px 10px #000;
  -o-box-shadow: 5px 10px #000;
  box-shadow: 5px 10px #000;
  
  header {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      margin: 0px;
      gap: 20px;
    }
  }
  .orders {
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 30px;
        color: var(--sidebar-color);
        margin: 0px;
        text-transform: capitalize;
      }
      .modify {
        color: var(--sidebar-color-1);
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
            height: 75px;
            width: 120px;
            background-color: var(--sidebar-bg-color-1);
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .content {
            color: var(--sidebar-color);
            text-align: left;
            flex-grow: 1;
            padding: 10px 25px;
            .time {
              color: var(--sidebar-color-1);
            }
          }
          .price {
            color: var(--sidebar-color-2);
            flex-grow: 1;
            text-align: right;
          }
        }
        &.deliver {
          border-top: 3px dashed var(--sidebar-color-2);
          padding-top: 35px;
          .img {
            color: var(--sidebar-color-1);
          }
          .content {
            display: flex;
            flex-direction: column;
            .time {
              color: var(--sidebar-color-1);
            }
          }
        }
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    .title {
      font-size: 25px;
    }
    .total-price {
      font-size: 30px;
    }
  }
  .checkout {
    width: 100%;
  }
  i.fas {
    color: var(--sidebar-color-1);
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
  color: var(--sidebar-color-1);
  z-index: 2;
  position: fixed;
  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
}
</style>