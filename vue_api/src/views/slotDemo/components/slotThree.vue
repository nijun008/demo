<template>
  <div>
    <slot v-bind:user="user">
      {{ user.name }}
    </slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: 'nj',
        age: 28
      }
    }
  }
}
</script>