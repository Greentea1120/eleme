<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>

    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    created() {
      // console.log(this.food);
    },
    data () {
      return {

      };
    },
    components: {

    },
    methods: {
      addCart(event) {
        // console.log('click');
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('add', event.target);
      },
      decreaseCart() {
        if (this.food.count) {
          this.food.count--;
        }
      }

    }
  };
</script>

<style scoped lang="stylus">
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      &.move-enter-active,&.move-leave-active
        transition all .3s linear
        .inner
          transition all .3s linear
      &.move-enter-active,&.move-leave
        opacity 1
        transform translate3d(0,0,0)
        .inner
          transform rotate(0)
      &.move-leave-active,&.move-enter
        opacity 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)
      .inner
        display inline-block
        font-size 24px
        line-height @font-size
        color rgb(0,160,220)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      font-size 24px
      line-height @font-size
      color rgb(0,160,220)


</style>
