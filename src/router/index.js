/*
 * @Author: Greentea
 * @Date: 2017-10-12 17:05:56
 * @Last Modified by:   Greentea
 * @Last Modified time: 2017-10-12 17:05:56
 */
import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/goods/goods';
import Ratings from '@/components/ratings/ratings';
import Seller from '@/components/seller/seller';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
});
