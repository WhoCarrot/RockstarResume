<template>
  <b-container class="resume">
    <div>
      <p>{{Id}}</p>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Profile">
            <Profile :Id="Number(Id)" />
          </b-tab>
          <b-tab title="Introduction">
            <introduction :Id="Number(Id)" />
          </b-tab>
          <b-tab title="Skills" active>
            <skills :Id="Number(Id)" />
          </b-tab>
          <b-tab title="Experience">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
          <b-tab title="Extra">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
          <b-tab title="Data">
            <b-card-text>
              <p>Data:</p>
              <pre>{{resumeData}}</pre>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import Profile from "@/components/ResumeSections/Profile.vue";
import Introduction from "@/components/ResumeSections/Introduction.vue";
import Skills from "@/components/ResumeSections/Skills.vue";

import Resume from "@/assets/ts/class/resume";
import { get, sync } from "vuex-pathify";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "",
  components: {
    Profile,
    Introduction,
    Skills
  },
  data() {
    return {
      //Id: this.$route.params.Id
    };
  },
  props: ["Id"],
  computed: {
    resumeData() {
      return this.$store.getters["resume/resumeData"](this.Id);
    }
  },
  methods: {
    ...mapActions("resume", ["requestResumeList", "createResume"])
  },
};
</script>

<style scoped>
</style>
