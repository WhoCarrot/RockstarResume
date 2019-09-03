<template>
  <b-container class="experience-table my-4" fluid>
    <b-row>
      <b-col sm="10">
        <b>{{experienceHeader(experience)}}</b>
      </b-col>
      <b-col sm="2">
        <vue-icon-button icon="edit" @click="$emit('edit', experience.id)" />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Period</b-col>
      <b-col sm="8">{{experience.period}}</b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Branch</b-col>
      <b-col sm="8">{{experience.branch.english_value}}</b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Title</b-col>
      <b-col sm="8">{{experience.title.english_value}}</b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Programming languages</b-col>
      <b-col sm="8">{{programmingLanguages}}</b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Technologies used</b-col>
      <b-col sm="8">{{programmingFrameworks}}</b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Opererating Systems</b-col>
      <b-col sm="8">{{operatingSystems}}</b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Database</b-col>
      <b-col sm="8">{{databases}}</b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="mt-3">{{experience.work_description.english_value}}</p>
        <br />
        <ul
          class="my-2"
          v-for="work_activity in experience.work_activities"
          :key="work_activity.id"
        >
          <li v-if="work_activity.english_value">{{work_activity.english_value}}</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "vue-experience-table",
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  computed: {
    resume_id() {
      return this.experience.resume_id
    },
    programmingLanguages() {
      return this.arrayToString(this.experience.programming_languages)
    },
    programmingFrameworks() {
      return this.arrayToString(this.experience.programming_frameworks)
    },
    databases() {
      return this.arrayToString(this.experience.programming_databases)
    },
    operatingSystems() {
      return this.arrayToString(this.experience.programming_operating_systems)
    }
  },
  methods: {
    experienceHeader(experience) {
      let header = "";
      if (this.experience.company_name) {
        header += this.experience.company_name
      }
      if (this.experience.city) {
        header += " (" + this.experience.city + ")";
      }
      return header;
    },
    arrayToString(array) {

      if (array && array.length > 0) {
        var arr = []
        // Filter to only the text
        array.forEach(element => {
          arr.push(element.text)
        });

        // https://stackoverflow.com/a/21910636/8205497
        return arr.reduce(
          function (prev, curr, i) {
            return prev + curr + ((i === arr.length - 2) ? ' & ' : ', ')
          }, '').slice(0, -2);
      }
      return "-";
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