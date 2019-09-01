<template>
  <b-container>
    <b-row>
      <b-col>Current experience Id: {{this.experience_id}}</b-col>
    </b-row>
    <div v-for="experience in experienceList" :key="experience.id">
      <b-container class="experience-table my-4" fluid>
        <b-row>
          <b-col sm="10">{{experience.header}} {{experience.id}}</b-col>
          <b-col sm="2">
            <vue-icon-button icon="edit" @click="editExperience(experience.id)" />
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="4">Period</b-col>
          <b-col sm="8">{{experience.period}}</b-col>
        </b-row>
        <b-row>
          <b-col sm="4">Branch</b-col>
          <b-col sm="8">{{experience.period}}</b-col>
        </b-row>
        <b-row>
          <b-col sm="4">Title</b-col>
          <b-col sm="8">{{experience.period}}</b-col>
        </b-row>
        <b-row>
          <b-col sm="4">Programming languages</b-col>
          <b-col sm="8">{{experience.period}}</b-col>
        </b-row>
        <b-row>
          <b-col sm="4">Technologies used</b-col>
          <b-col sm="8">{{experience.period}}</b-col>
        </b-row>
        <b-row>
          <b-col sm="4">Opererating Systems</b-col>
          <b-col sm="8">{{experience.period}}</b-col>
        </b-row>
        <b-row>
          <b-col sm="4">Database</b-col>
          <b-col sm="8">{{experience.period}}</b-col>
        </b-row>
      </b-container>
    </div>
    <vue-button text="Add experience" @click="createExperience" />
    <vue-experience-form
      :id="Number(this.Id)"
      :experienceobject="experience"
      :experienceid="this.experience_id"
    />
  </b-container>
</template>

<script>
import VueExperienceForm from "@/components/VueExperienceForm.vue";
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

      //Experience.find(this.experience_id);
    },
    validExperience() {
      return this.experience_id > -1;
    }
  },
  methods: {
    createExperience() {
      dispatch("resume/addExperience", { resume_id: this.Id });
      let lastId = this.$store.getters['resume/getLastExperience'](this.Id).id
      this.setupExperience(lastId);
    },
    editExperience(experience_id) {
      this.setupExperience(experience_id);
    },
    setupExperience(experience_id) {

      // Fix to prevent having to click twice to open the experience form for the first time. 
      this.experience_id = experience_id;
      console.log("Start");
      var x = this;

      setTimeout(function () {
        x.showModal(true);
        console.log("Stop");
      }, 100);
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

<style lang="scss" scoped>
.experience-table {
  div {
    div {
      border: 1px solid #287c89;
    }
  }
}
</style>