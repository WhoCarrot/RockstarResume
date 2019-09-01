<template>
  <b-row>
    <b-col>
      <!-- Certificates -->
      <vue-input-table
        :id="Number(Id)"
        :classmodal="certificateValue"
        header="Certificates"
        buttontext="Add certificate"
      />
      <!-- Competenties -->
      <vue-input-table
        :id="Number(Id)"
        :classmodal="competencyValue"
        header="Competenties"
        buttontext="Add competency"
      />

      <!-- Studies -->
      <vue-input-table
        :id="Number(Id)"
        :classmodal="studyValue"
        header="Studies"
        buttontext="Add study"
      />

      <!-- Hobbies/interests -->
      <vue-input-table
        :id="Number(Id)"
        :classmodal="interestsValue"
        header="Hobbies & Interests"
        buttontext="Add hobbies/interests"
      />
    </b-col>
  </b-row>
</template>

<script>
import VueInputTable from "@/components/VueInputTable.vue";
import Certificate from "@/assets/ts/class/inputvalue/certificate"
import Competency from "@/assets/ts/class/inputvalue/competency"
import Study from "@/assets/ts/class/inputvalue/study"
import Interests from "@/assets/ts/class/inputvalue/interests"

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
  computed: {
    certificateValue: function () {
      return Certificate;
    },
    competencyValue: function () {
      return Competency;
    },
    studyValue: function () {
      return Study;
    },
    interestsValue: function () {
      return Interests;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>