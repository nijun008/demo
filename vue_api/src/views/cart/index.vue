<template>
  <div>
    <h2>cart</h2>
    <div>购物车总数：{{ count }}</div>
    <div>购物车降价数：{{ saleCount }}</div>
    <div>
      <el-button icon="el-icon-plus" type="primary" @click="add">添加商品</el-button>
      <el-button icon="el-icon-delete" type="warning" @click="remove">移除商品</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['count', 'saleCount'])
  },
  methods: {
    ...mapMutations('cart', {
      addToCart: 'ADD',
      removeFromCart: 'REMOVE'
    }),
    add() {
      this.addToCart([{id: 1, orgPrice: 56, sellPrice: 54}])
    },
    remove() {
      this.removeFromCart({id: 1, orgPrice: 56, sellPrice: 54})
    }
  }
}
</script>