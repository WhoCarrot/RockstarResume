<template>
    <b-row>
      <b-col class="text-center">
        <b-button
          variant="outline-primary"
          class="mx-auto my-3"
          @click="$emit('click')"
        >{{this.text}}</b-button>
      </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "vue-button",
        props: {
            text: {
                type: String,
                default: "" 
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>