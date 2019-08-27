<template>
  <div>
    <vue-title text="How do colleagues describe you?" />
    <vue-input-field :firstInput.sync="firstInput" :secondInput.sync="secondInput" />
    
    {{firstInput}}
    <br />
    {{secondInput}}
  </div>
</template>

<script>
export default {
  name: "resumeIntroduction",
  data() {
    return {
      firstInput: "wdwd",
      secondInput: "sgbeopier"
    };
  },
  methods: {
    updateInput(value) {
      firstInput = value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>