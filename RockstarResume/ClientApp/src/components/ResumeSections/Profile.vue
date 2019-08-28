<template>
  <b-container class="profile">
    <!-- Profile Section  -->
    <b-row>
      <b-col>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="8">
        <p>Make sure your profile image look professional without filter.</p>
      </b-col>
      <b-col sm="4">
        <avatar />
      </b-col>
    </b-row>
    <!-- Data section -->
    <b-row>
      <b-col>
        <hr />
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="type-text">First name</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-first-name" v-model="firstName" type="text" required></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="type-text">Last name</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-last-name" v-model="lastName" type="text" required></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="type-text">Region</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-region" v-model="region" type="text" required></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="type-text">Nationality</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-nationality" v-model="nationality" type="text" required></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="type-text">Driver's license</label>
      </b-col>
      <b-col sm="9">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-3 variant="info">
              {{ driversLicenseTitle }}
              <span class="when-opened" style="float: right;">
                <font-awesome-icon icon="chevron-down" />
              </span>
              <span class="when-closed" style="float: right;">
                <font-awesome-icon icon="chevron-right" />
              </span>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-form-checkbox-group
                v-model="driversLicense"
                :options="options.driversLicense"
                name="flavour-2a"
                stacked
              ></b-form-checkbox-group>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>

    <hr />
    <!-- Languages -->
    <label for="type-text">Languages</label>

    <b-row v-for="language in languageList" :key="language.id" class="my-1">
      <b-col sm="5">
        <b-form-input
          list="my-list-id"
          :value="language.language_name"
          @input="e => { updateLanguageRow(language, {language_name : e}) }"
        ></b-form-input>

        <datalist id="my-list-id">
          <option
            v-for="(languageOption, index) in options.languageOptions"
            :key="index"
          >{{ languageOption.text }}</option>
        </datalist>
      </b-col>
      <b-col sm="6">
        <b-form-select
          @input="e => { updateLanguageRow(language, {language_level : e}) }"
          :options="options.languageLevels"
        ></b-form-select>
      </b-col>
      <b-col class="text-left">
        <b-button
          variant="link"
          v-on:click="removeLanguageRow(language.id)"
          style="padding: 2px 8px;"
        >
          <font-awesome-icon icon="trash" style="font-size: 28px" />
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-button
          variant="outline-primary"
          class="mx-auto my-1"
          v-on:click="addLanguageRow()"
        >Add language</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <hr />
      </b-col>
    </b-row>
    <!-- Education -->
    <label for="type-text">Educations</label>
    <b-row v-for="(education, index) in educationList" :key="index + '-education'" class="my-4">
      <b-col sm="11">
        <b-row align-v="center" align-h="center">
          <b-col sm="6">
            <b-form-input
              placeholder="Education name"
              :value="education.education_name"
              @input="e => { updateEducationRow(education, {education_name : e}) }"
            ></b-form-input>
          </b-col>
          <b-col sm="6">
            <b-form-input
              placeholder="Institution"
              :value="education.education_institution"
              @input="e => { updateEducationRow(education, {education_institution : e}) }"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-2">
          <b-col sm="5" align-h="center" align-self="center">
            <vue-date-picker
              :dateValue="education.date_from"
              placeholder="Start date"
              @value="e => {updateEducationRow(education, {date_from : e})}"
            ></vue-date-picker>
          </b-col>
          <b-col sm="5" align-h="center" align-self="center">
            <vue-date-picker
              :dateValue="education.date_to"
              placeholder="End date"
              @value="e => {updateEducationRow(education, {date_to : e})}"
            ></vue-date-picker>
          </b-col>
          <b-col sm="2" align-h="center" align-self="center">
            <b-form-checkbox
              @input="e => { updateEducationRow(education, {graduated : e}) }"
              switch
              size="lg"
            >Graduated</b-form-checkbox>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="1" align-self="center">
        <b-row align-v="center" align-h="center">
          <b-col>
            <b-button
              variant="link"
              v-on:click="removeEducationRow(education.id)"
              style="padding: 2px 8px;"
            >
              <font-awesome-icon icon="trash" style="font-size: 28px" />
            </b-button>
          </b-col>
        </b-row>
      </b-col>

      <b-col>
        <hr />
      </b-col>
    </b-row>
    <div class="col text-center">
      <b-button
        variant="outline-primary"
        class="mx-auto my-1"
        v-on:click="addEducationRow()"
      >Add education</b-button>
    </div>
    <!-- <b-button
      variant="outline-primary"
      class="mx-auto my-1"
      v-on:click="saveResume()"
    >Save Resume</b-button>-->
  </b-container>
</template>

<script>
import Avatar from "@/components/Avatar";
import Resume from "@/assets/ts/class/resume";
import Language from "@/assets/ts/class/language";

import languages_en from "@/assets/ts/data/languages.en";
import { get, sync, dispatch } from "vuex-pathify";
import Education from "@/assets/ts/class/education";

export default {
  name: "resumeProfile",
  components: {
    Avatar
  },
  data() {
    return {
      options: {
        driversLicense: [
          { value: "N.V.T", text: "Geen rijbewijzen in bezit" },
          { value: "A", text: "A: motorrijbewijs" },
          { value: "A1", text: "A1: motorrijbewijs" },
          { value: "A2", text: "A2: motorrijbewijs" },
          {
            value: "AM",
            text:
              "AM: rijbewijs voor bromfiets, scooter, speed-pedelec, snorfiets en brommobiel"
          },
          { value: "B", text: "B: autorijbewijs" },
          {
            value: "BE",
            text: "BE en B+ (code 96): rijbewijs voor auto (B) met aanhanger"
          },
          { value: "C", text: "C: vrachtwagenrijbewijs" },
          {
            value: "CE",
            text: "CE: rijbewijs voor vrachtwagen (C) met aanhanger"
          },
          {
            value: "C1",
            text:
              "C1: rijbewijs voor ‘lichte’ vrachtwagen (gewicht tussen 3.500-7.500 kilo)"
          },
          {
            value: "C1E",
            text: "C1E: rijbewijs voor vrachtwagen (C1) met aanhanger"
          },
          {
            value: "D",
            text: "D: busrijbewijs (vervoer van meer dan 8 personen)"
          },
          { value: "DE", text: "DE: rijbewijs voor bus (D) met aanhanger" },
          {
            value: "D1",
            text: "D1: rijbewijs voor ‘kleine’ bus (vervoer van 8-16 personen)"
          },
          {
            value: "D1E",
            text: "D1E: rijbewijs voor 'kleine' bus (D1E) met aanhanger"
          },
          { value: "T", text: "T - trekkerrijbewijs." }
        ],
        languageOptions: languages_en,
        languageLevels: [
          { value: "0", text: "Choose option" },
          { value: "1", text: "Elementary proficiency" },
          { value: "2", text: "Limited working proficiency" },
          { value: "3", text: "Professional working proficiency" },
          { value: "4", text: "Full professional proficiency" },
          { value: "5", text: "Native or bilingual proficiency" }
        ]
      }
    };
  },
  props: {
    Id: {
      type: Number
    },
  },
  computed: {
    resumeData: function () {
      return get("resume/resumeData", this.Id);
    },
    firstName: {
      get() {
        return Resume.find(this.Id).firstName;
      },
      set(value) {
        Resume.update({
          where: this.Id,
          data: { firstName: value }
        });
      }
    },
    lastName: {
      get() {
        return Resume.find(this.Id).lastName;
      },
      set(value) {
        Resume.update({
          where: this.Id,
          data: { lastName: value }
        });
      }
    },
    region: {
      get() {
        return Resume.find(this.Id).region;
      },
      set(value) {
        Resume.update({
          where: this.Id,
          data: { region: value }
        });
      }
    },
    nationality: {
      get() {
        return Resume.find(this.Id).nationality;
      },
      set(value) {
        Resume.update({
          where: this.Id,
          data: { nationality: value }
        });
      }
    },
    driversLicense: {
      get() {
        return (
          Resume //.query()
            //.with("driversLicenses")
            .find(this.Id).driversLicenses
        );
      },
      set(value) {
        Resume.update({
          where: this.Id,
          data(resume) {
            resume.driversLicenses = value;
          }
        });
      }
    },
    languageList: function () {
      return Language.query()
        .where("resume_id", this.Id)
        .get();
    },
    educationList: function () {
      return Education.query()
        .where("resume_id", this.Id)
        .get();
    },
    driversLicenseTitle: function () {
      var $title = "";
      let $count = this.driversLicense.length;
      if ($count > 0) {
        $title = this.driversLicense.join(", ").replace(/,(?!.*,)/gim, " &");
      } else {
        $title = "Please select your driver licenses";
      }

      return $title;
    }
  },
  methods: {
    // Profile image upload

    // Language methods
    addLanguageRow: function () {
      this.$store.dispatch("resume/addLanguage", {
        resume_id: this.Id
      });
    },
    updateLanguageRow(row, data) {
      console.log(row);
      console.log(data);

      Language.update({
        where: row.id,
        data
      });
    },
    removeLanguageRow: function (index) {
      Language.delete(index);
    },

    // Education methods
    addEducationRow: function () {
      this.$store.dispatch("resume/addEducation", {
        resume_id: this.Id
      });
    },
    updateEducationRow(row, data) {
      Education.update({
        where: row.id,
        data
      });
    },
    removeEducationRow: function (id) {
      Education.delete(id);
    }
  }
};
</script>

<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
