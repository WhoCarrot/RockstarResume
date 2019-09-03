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
      <b-col sm="8">{{experience.period}}</b-col>
    </b-row>
    <b-row>
      <b-col sm="4">Database</b-col>
      <b-col sm="8">{{experience.period}}</b-col>
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
      return this.arrayToString("programming_languages", this.experience.programming_languages)
    },
    programmingFrameworks() {
      return this.arrayToString("programming_frameworks", this.experience.programming_frameworks)
    }

  },
  methods: {
    experienceHeader(experience) {
      return this.experience.company_name + " (" + this.experience.city + ")";
    },
    arrayToString(prop, array) {

      if (this.experience[prop].length > 0) {
        var arr = []
        // Filter to only the text
        this.experience[prop].forEach(element => {
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