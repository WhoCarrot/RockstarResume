<template>
  <h4 v-text="text"></h4>
</template>

<script>
export default {
  name: "vue-title",
  props: {
      text: {
          type: String,
          default: ""
      },
  },
};
</script>

<style lang="scss" scoped>
</style>