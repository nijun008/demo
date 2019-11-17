<template>
  <div>
    <h4>子组件{{ value }}</h4>
    <button @click="changeValue(1)">+</button>
    <button @click="changeValue(-1)">-</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    changeValue(val) {
      window.console.log(val)
      this.$emit('input', this.value + val)
    }
  }
}
</script>