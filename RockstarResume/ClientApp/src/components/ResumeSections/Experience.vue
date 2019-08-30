<template>
  <b-container>
    <div v-for="experience in experienceList" :key="experience.id">
      <b-container class="experience-table my-4" fluid>
        <b-row>
          <b-col sm="10">{{experience.header}}</b-col>
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
    <div v-if="validExperience">
      <vue-experience-form :id="Number(this.Id)" v-bind:experience="this.experience" />
    </div>
  </b-container>
</template>

<script>
import VueExperienceForm from "@/components/VueExperienceForm.vue";
import Resume from "@/assets/ts/class/resume";
import Experience from "@/assets/ts/class/experience";

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
        .where("resume_id", this.Id)
        .get();
    },
    experience() {
      return Experience.find(this.experience_id);
    },
    validExperience() {
      return this.experience_id > -1;
    }
  },
  methods: {
    createExperience() {
      Experience.insert({
        data: {
          resume_id: this.Id
        }
      }).then((experience) => {
        let id = experience.experience[0].id
        this.setupExperience(id);
      })
    },
    editExperience(experience_id) {
      this.setupExperience(experience_id);
    },
    setupExperience(experience_id) {
      // Fix to prevent having to click twice to open the experience form for the first time. 

      if (this.experience_id === -1) {
        this.experience_id = experience_id;
        var x = this;
        console.log("Start");

        setTimeout(function () {
          x.showModal(true);
          console.log("Stop");
        }, 100);

      } else {
        this.experience_id = experience_id;
        this.showModal(true);
      }
    },
    showModal(show) {
      if (show) {
        this.$bvModal.show("vue-experience-modal")
      } else {
        this.$bvModal.hide("vue-experience-modal")
      }
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