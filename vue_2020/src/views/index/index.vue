<template>
<div>Index</div>
</template>

<script>
import {
  getWitticism
} from '@/http'

import {
  reactive,
  onMounted
} from 'vue'

export default {
  setup() {
    const witticism = reactive({})

    const getData = () => {
      getWitticism()
    }

    onMounted(() => {
      getData()
    })

    return {
      witticism
    }
  }
}
</script>
