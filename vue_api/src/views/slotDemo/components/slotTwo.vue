<template>
  <div>
    <div><slot name="top"></slot></div>
    <div><slot name="middle"></slot></div>
    <div><slot name="bottom"></slot></div>
    <slot>默认的</slot>
  </div>
</template>