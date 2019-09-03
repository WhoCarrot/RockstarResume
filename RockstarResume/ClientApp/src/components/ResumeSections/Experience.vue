<template>
  <b-container>
    <b-row>
      <b-col>Current experience Id: {{this.experience_id}}</b-col>
    </b-row>
    <div v-for="experience in experienceList" :key="experience.id">
      <vue-experience-table :experience="experience" @edit="id => { editExperience(id)}" />
    </div>
    <vue-button text="Add experience" @click="createExperience" />
    <vue-experience-form
      :id="Number(this.Id)"
      :experience="experience"
      :experienceid="this.experience_id"
    />
  </b-container>
</template>

<script>
import VueExperienceTable from "@/components/experience/VueExperienceTable.vue";
import VueExperienceForm from "@/components/experience/VueExperienceForm.vue";
import Resume from "@/assets/ts/class/resume";
import Experience from "@/assets/ts/class/experience";
import { get, sync, dispatch } from "vuex-pathify";

export default {
  name: "resumeExperience",
  props: {
    Id: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      experience_id: -1,
    }
  },
  components: {
    VueExperienceTable,
    VueExperienceForm
  },
  computed: {
    experienceList() {
      return Experience.query()
        .withAllRecursive(5)
        .where("resume_id", this.Id)
        .get();
    },
    experience() {
      return Experience.query()
        .withAllRecursive(5)
        .where("resume_id", this.Id)
        .where("id", this.experience_id)
        .first();
    },
    validExperience() {
      return this.experience_id > -1;
    }
  },
  methods: {

    createExperience() {
      dispatch("resume/addExperience", { resume_id: this.Id });
      let lastId = this.$store.getters['resume/getLastExperience'](this.Id).id
      this.experience_id = lastId;
      this.showModal(true);
    },
    editExperience(experience_id) {
      this.experience_id = experience_id;
      this.showModal(true);
    },

    showModal(show) {
      if (show) {
        this.$bvModal.show("vue-experience-modal")
      } else {
        this.$bvModal.hide("vue-experience-modal")
      }
    }
  },
  created() {
    let firstId = this.$store.getters['resume/getFirstExperience'](this.Id).id
    if (firstId) {
      this.experience_id = firstId;
    } else {
      console.log("Failed to get the first Experience table on created(), make sure the first one is created.");
    }

  },
}
</script>

