<template>
  <b-container class="resume">
    <b-tabs card>
      <b-tab title="Profile" active>
        <Profile :Id="Number(Id)" />
      </b-tab>
      <b-tab title="Introduction">
        <introduction :Id="Number(Id)" />
      </b-tab>
      <b-tab title="Skills">
        <skills :Id="Number(Id)" />
      </b-tab>
      <b-tab title="Experience">
        <experience :Id="Number(Id)" />
      </b-tab>
      <b-tab title="Extra">
        <extra :Id="Number(Id)" />
      </b-tab>
      <b-tab title="Data">
        <b-card-text>
          <vue-button text="Export to docx" @click="exportToDocx" />
          <p>Data:</p>
          <pre>{{resumeData}}</pre>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
import Profile from "@/components/ResumeSections/Profile.vue";
import Introduction from "@/components/ResumeSections/Introduction.vue";
import Skills from "@/components/ResumeSections/Skills.vue";
import Extra from "@/components/ResumeSections/Extra.vue";
import Experience from "@/components/ResumeSections/Experience.vue";
import Resume from "@/assets/ts/class/resume";

import { get, sync } from "vuex-pathify";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "resume",
  components: {
    Profile,
    Introduction,
    Skills,
    Experience,
    Extra
  },
  data() {
    return {
    };
  },
  props: ["Id"],
  computed: {
    resumeData() {
      return this.$store.getters["resume/resumeData"](this.Id);
    }
  },
  methods: {
    ...mapActions("resume", ["requestResumeList", "createResume"]),
    exportToDocx() {
      const { firstName, lastName } = this.$store.getters["resume/resumeData"](this.Id);
      const resumes = [
        { id: 1 }
      ];
      const id = 4;

      axios.get(`https://localhost:44398/api/rockstar/4`)
        .then((response) => {
          axios.put("https://localhost:44398/api/rockstar", { id, firstName, lastName, resumes, nationality: JSON.stringify(this.$store.getters["resume/resumeData"](this.Id)) })
            .then((response) => {
              console.log(response);
              window.open("https://localhost:44398/api/export/1");
            });
        }).catch((error, response) => {
          console.log(error);
          axios.post("https://localhost:44398/api/rockstar", { id, firstName, lastName, resumes, nationality: JSON.stringify(this.$store.getters["resume/resumeData"](this.Id)) })
            .then((response) => {
              console.log(response);
              window.open("https://localhost:44398/api/export/1");
            });
        });
    }
  },
};
</script>

<style scoped>
</style>
