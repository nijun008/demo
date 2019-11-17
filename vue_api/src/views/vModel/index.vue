<template>
  <div>
    <h2>v-model</h2>
    <h3>父组件{{ value }}</h3>
    <button @click="changeValue(1)">+</button>
    <button @click="changeValue(-1)">-</button>
    <my-component v-model="value"></my-component>
  </div>
</template>

<script>
import myComponent from './components/myComponent'
export default {
  components: {myComponent},
  data() {
    return {
      value: 2
    }
  },
  methods: {
    changeValue(val) {
      this.value = this.value + val
    }
  }
}
</script>