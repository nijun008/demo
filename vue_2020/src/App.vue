<template>
<layout />
</template>

<script>
import layout from './layout'

export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 14px;
  color: #000;
}

html,
body {
  height: 100%;
}

ol,
ul,
li {
  list-style: none;
}

#app {
  height: 100%;
  min-height: 100%;
  background-color: #f8f8f8;
}

.flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.justify-center {
  justify-content: center;
}

.align-middle {
  align-content: center;
  align-items: center;
}

.view-container {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
</style>
