<template>
  <div>
    <h2>slotDemo</h2>
    <div class="wrap">
      <div class="slot-box">
        <slotOne></slotOne>
        <slotOne>覆盖默认插槽内容</slotOne>
      </div>
      <div class="slot-box">
        <slotTwo>
          <template v-slot:top>top 插槽</template>
          <template v-slot:middle>middle 插槽</template>
          <template v-slot:bottom>bottom 插槽</template>
          没有template包裹的内容覆盖默认内容
        </slotTwo>
      </div>
      <div class="slot-box">
        <slotThree>
          <template v-slot:default="slotThreeProp">
            {{ slotThreeProp.user.age }}
          </template>
        </slotThree>
      </div>
      <div class="slot-box"></div>
    </div>
  </div>
</template>

<script>
import slotOne from './components/slotOne'
import slotTwo from './components/slotTwo'
import slotThree from './components/slotThree'
export default {
  components: {
    slotOne,
    slotTwo,
    slotThree
  },
  data () {
    return {
      msg: '124',
      user: {
        name: 'Nj',
        age: 28
      }
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
}
.slot-box {
  width: 30%;
  height: 300px;
  border: 1px dashed #6d6d6d;
  margin: 0 10px;
}
</style>