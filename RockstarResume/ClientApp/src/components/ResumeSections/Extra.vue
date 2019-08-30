<template>
  <b-row>
    <b-col>
      <!-- Certificates -->
      <vue-input-table
        :id="Number(Id)"
        type="certificates"
        header="Certificates"
        buttontext="Add certificate"
      />
      <!-- Competenties -->
      <vue-input-table
        :id="Number(Id)"
        type="competenties"
        header="Competenties"
        buttontext="Add competency"
      />

      <!-- Studies -->
      <vue-input-table :id="Number(Id)" type="studies" header="Studies" buttontext="Add study" />

      <!-- Hobbies/interests -->
      <vue-input-table
        :id="Number(Id)"
        type="hobbiesAndInterests"
        header="Hobbies & Interests"
        buttontext="Add hobbies/interests"
      />
    </b-col>
  </b-row>
</template>

<script>
import VueInputTable from "@/components/VueInputTable.vue";

export default {
  name: "resumeExtra",
  props: {
    Id: {
      type: Number
    },
  },
  components: {
    VueInputTable,
  },
}
</script>

<style lang="scss" scoped>
</style>