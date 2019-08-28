<template>
  <div>
    <!-- Import LinkedIn Skills -->
    <vue-button text="Import LinkedIn Skills" v-b-modal.modal-1 />
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">This is where you will be able to import LinkedIn skills</p>
    </b-modal>

    <!-- Add custom Skills -->
    <vue-button text="Add Skills" />
  </div>
</template>

<script>

export default {
  name: "resumeSkills",

};
</script>

<style lang="scss" scoped>
</style>