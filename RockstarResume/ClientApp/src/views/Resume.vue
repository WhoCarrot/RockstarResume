<template>
  <b-container class="resume">
    <div>
      <p>{{Id}}</p>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Profile" active>
            <Profile :Id="Id" />
          </b-tab>
          <b-tab title="Introduction">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
          <b-tab title="Skills">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
          <b-tab title="Experience">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
          <b-tab title="Extra">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
          <b-tab title="Data">
            <b-card-text>
              <p>Data: </p>
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
import Resume from "@/assets/ts/class/resume";
import { get, sync } from "vuex-pathify";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "",
  components: {
    Profile
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

  beforeMount() {
    this.$store.dispatch("resume/requestResumeList");
  }
};
</script>

<style scoped>
</style>
