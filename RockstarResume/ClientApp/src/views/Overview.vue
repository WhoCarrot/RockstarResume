<template>
  <b-container fluid class="overview">
    <b-list-group>
      <b-list-group-item v-for="(resume, key) in getResumeList" :key="key">
        <b-link :to="{ name: 'Resume', params: { Id: resume.id }}">{{ resume.resume_title }}</b-link>
        <!-- <router-link :to="{ name: 'Resume', params: { Id: resume.Id }}">{{ resume.Id}}</router-link> -->
      </b-list-group-item>
    </b-list-group>

    <div class="col text-center">
      <b-button variant="outline-primary" class="mx-auto my-1" v-on:click="addResume()">Add Resume</b-button>
    </div>
  </b-container>
</template>

<script>
import Resume from "@/assets/ts/class/resume";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Overview",
  components: {},
  data() {
    return {

    };
  },
  computed: {
    getResumeList() {
      return Resume.all();
    },

  },
  methods: {
    addResume() {
      this.$store.dispatch("resume/addResume");
    }
  },
  created() {
    this.$store.dispatch("resume/setupResumeData");
  },
};
</script>

<style scoped>
</style>
