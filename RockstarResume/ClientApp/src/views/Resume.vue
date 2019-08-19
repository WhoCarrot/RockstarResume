<template>
  <b-container fluid class="resume">
    <h1>This is an resume page</h1>

    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Profile" active>
            <Profile msg="Welcome to Your Vue.js App" />
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
        </b-tabs>
      </b-card>
    </div>

    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <b-label :for="`type-${type}`">Type {{ type }}:</b-label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
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
    return {
      types: [
        "text",
        "password",
        "email",
        "number",
        "url",
        "tel",
        "date",
        `time`,
        "range",
        "color"
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
