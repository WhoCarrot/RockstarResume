<template>
  <div>
    <!-- Qualities -->
    <b-row>
      <b-col>
        <vue-title text="How do colleagues describe you?" />
      </b-col>
    </b-row>
    <vue-input-label firstLabel="Dutch" secondLabel="English" />
    <b-row v-for="quality in qualitiesList" :key="quality.id" class="my-1">
      <b-col sm="12">
        <vue-input-field
          :firstInput="quality.dutch_value"
          :secondInput="quality.english_value"
          @firstInput="e => { updateQualityRow(quality, {dutch_value : e}) }"
          @secondInput="e => { updateQualityRow(quality, {english_value : e}) }"
          @remove="removeQualityRow(quality.id)"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-button
          variant="outline-primary"
          class="mx-auto my-3"
          v-on:click="addQualityRow()"
        >Add quality</b-button>
      </b-col>
    </b-row>
    <!-- When do you thrive professionally? -->
    <b-row>
      <b-col>
        <vue-title text="When do you thrive professionally?" />
      </b-col>
    </b-row>
    <vue-input-label firstLabel="Dutch" secondLabel="English" />
    <b-row class="my-1">
      <b-col sm="12">
        <vue-input-field
          :firstInput="thriveProfessionally.dutch_value"
          :secondInput="thriveProfessionally.english_value"
          @firstInput="e => { updateThriveProfessionally({dutch_value : e}) }"
          @secondInput="e => { updateThriveProfessionally({english_value : e}) }"
          :textarea="true"
          :removable="false"
        />
      </b-col>
    </b-row>
    <!-- What should colleagues need to know about you? -->
    <b-row>
      <b-col>
        <vue-title text="What should colleagues need to know about you?" class="my-2" />
      </b-col>
    </b-row>
    <vue-input-label firstLabel="Dutch" secondLabel="English" />
    <b-row class="my-1">
      <b-col sm="12">
        <vue-input-field
          :firstInput="whatColleguesNeedToKnow.dutch_value"
          :secondInput="whatColleguesNeedToKnow.english_value"
          @firstInput="e => { updateWhatColleguesNeedToKnow({dutch_value : e}) }"
          @secondInput="e => { updateWhatColleguesNeedToKnow({english_value : e}) }"
          :textarea="true"
          :removable="false"
        />
      </b-col>
    </b-row>
    <!-- Which 3 things would you like to see in your future project: -->
    <b-row>
      <b-col>
        <vue-title text="Which 3 things would you like to see in your future project?" />
      </b-col>
    </b-row>
    <vue-input-label firstLabel="Dutch" secondLabel="English" />
    <b-row v-for="things in thingsInFutureProjectsList" :key="things.id" class="my-1">
      <b-col sm="12">
        <vue-input-field
          :firstInput="things.dutch_value"
          :secondInput="things.english_value"
          @firstInput="e => { updateThingsInFutureProjects(things, {dutch_value : e}) }"
          @secondInput="e => { updateThingsInFutureProjects(things, {english_value : e}) }"
          :removable="false"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DualInputValue from "@/assets/ts/class/dualInputValue";

export default {
  name: "resumeIntroduction",
  data() {
    return {
      firstInput: "wdwd",
      secondInput: "sgbeopier"
    };
  },
  props: {
    Id: {
      type: Number
    },
  },
  computed: {
    qualitiesList: function () {
      return DualInputValue.query()
        .where("resume_id", this.Id)
        .where('type', 'quality')
        .get();
    },
    thriveProfessionally: function () {
      return DualInputValue.query()
        .where("resume_id", this.Id)
        .where('type', 'thriveProfessionally')
        .first();
    },
    whatColleguesNeedToKnow: function () {
      return DualInputValue.query()
        .where("resume_id", this.Id)
        .where('type', 'whatColleguesNeedToKnow')
        .first();
    },
    thingsInFutureProjectsList: function () {
      return DualInputValue.query()
        .where("resume_id", this.Id)
        .where('type', 'thingsInFutureProjects')
        .get();
    },
  },
  methods: {
    // Qualities methods
    addQualityRow: function () {
      this.$store.dispatch("resume/addQuality", {
        resume_id: this.Id
      });
    },
    updateQualityRow(row, data) {
      DualInputValue.update({
        where: row.id,
        data
      });
    },
    removeQualityRow: function (index) {
      DualInputValue.delete(index);
    },
    updateInput(value) {
      firstInput = value;
    },
    // thriveProfessionally methods
    updateThriveProfessionally(data) {
      DualInputValue.update({
        where: (e) => {
          return e.resume_id === this.Id && e.type === 'thriveProfessionally'
        }, data
      });
    },
    updateWhatColleguesNeedToKnow(data) {
      DualInputValue.update({
        where: (e) => {
          return e.resume_id === this.Id && e.type === 'whatColleguesNeedToKnow'
        }, data
      });
    },
    updateThingsInFutureProjects(data) {
      DualInputValue.update({
        where: (e) => {
          return e.resume_id === this.Id && e.type === 'thingsInFutureProjects'
        }, data
      });
    },

  }
};
</script>

<style lang="scss" scoped>
</style>