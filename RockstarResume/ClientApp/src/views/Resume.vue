<template>
  <b-container class="resume">
    <div>
      <p>{{Id}}</p>
      <b-card no-body>
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
import Extra from "@/components/ResumeSections/Extra.vue";
import Experience from "@/components/ResumeSections/Experience.vue";

import Resume from "@/assets/ts/class/resume";
import { get, sync } from "vuex-pathify";
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
