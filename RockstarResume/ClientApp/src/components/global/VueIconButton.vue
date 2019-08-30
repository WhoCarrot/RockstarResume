<template>
  <b-row>
    <b-col class="text-center">
      <b-button variant="link" class="mx-auto my-3" @click="$emit('click')">
        <font-awesome-icon :icon="icon" style="font-size: 28px" />
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "vue-icon-button",

  props: {
    icon: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
</style>