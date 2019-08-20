<template>
  <b-container fluid class="resume">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Profile" active>
            <Profile v-on:updateResume="resume = $event" />
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
            <b-card-text>{{resume}}</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import Profile from "@/components/ResumeSections/Profile.vue";

export default {
  name: "",
  components: {
    Profile
  },
  data() {
    return { resume: {} };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
