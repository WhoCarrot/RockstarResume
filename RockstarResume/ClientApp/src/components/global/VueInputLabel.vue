<template>
  <b-row sm="11" > 
    <b-col sm="5">
      <label for="type-text">{{firstLabel}}</label>
    </b-col>
    <b-col cols="2" md="auto" class="p-0" style="width: 102px !important">&nbsp;</b-col>
    <b-col sm="5">
      <label for="type-text">{{secondLabel}}</label>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "vue-input-label",
  data() {
    return {
    };
  },
  props: {
    firstLabel: {
      type: String,
      default: "Dutch"
    },
    secondLabel: {
      type: String,
      default: "English"
    },
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>