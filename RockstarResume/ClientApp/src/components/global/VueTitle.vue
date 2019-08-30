<template>
  <h5 v-text="text"></h5>
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
h5 {
  font-size: 18px;
}
</style>