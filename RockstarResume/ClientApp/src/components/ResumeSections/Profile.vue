<template>
  <b-container class="profile">
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
    <p>{{driversLicense}}</p>
    <!-- <label for="type-text">Languages</label>

    <b-row v-for="(row, index) in resume.languages" :key="index" class="my-1">
      <b-col sm="5">
        <b-form-input list="my-list-id" v-on:input="updateResume()" v-model="row.language"></b-form-input>

        <datalist id="my-list-id">
          <option
            v-for="(language, index) in options.languageOptions"
            :key="index"
          >{{ language.text }}</option>
        </datalist>
      </b-col>
      <b-col sm="6">
        <b-form-select
          v-model="row.proficiency"
          v-on:input="updateResume()"
          :options="options.languageLevels"
        ></b-form-select>
      </b-col>
      <b-col class="text-left">
        <b-button variant="link" v-on:click="removeLanguageRow(index)" style="padding: 2px 8px;">
          <font-awesome-icon icon="trash" style="font-size: 28px" />
        </b-button>
      </b-col>
    </b-row>
    <div class="col text-center">
      <b-button
        variant="outline-primary"
        class="mx-auto my-1"
        v-on:click="addLanguageRow()"
      >Add language</b-button>
    </div>-->

    <!-- <b-button
      variant="outline-primary"
      class="mx-auto my-1"
      v-on:click="saveResume()"
    >Save Resume</b-button>-->
  </b-container>
</template>

<script>
import Resume from "@/assets/ts/class/resume";

import languages_en from "../../assets/js/data/languages.en";
import { get, sync, dispatch } from "vuex-pathify";

export default {
  name: "resumeProfile",
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
  props: ["Id"],

  computed: {
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

    driversLicenseTitle: function() {
      var $title = "";
      let $count = this.driversLicense.length;
      if ($count > 0) {
        $title = this.driversLicense.join(", ").replace(/,(?!.*,)/gim, " &");
      } else {
        $title = "Please select your driver licenses";
      }

      return $title;
    },
    getLanguageRows: function() {
      if (this.resume.languages.length === 0) {
        return [
          {
            lang: "",
            proficiency: 0
          }
        ];
      }
      return this.resume.languages;
    }
  },
  methods: {
    updateResume: function() {
      // this.$emit("updateResume", this.resume);
    },
    saveResume: function() {},
    addLanguageRow: function() {
      this.resume.languages.push({
        lang: "",
        proficiency: 0
      });
    },
    removeLanguageRow: function(index) {
      if (index > -1) {
        this.resume.languages.splice(index, 1);
      }
    }
  },
  created() {
    //this.updateResume();
  }
};
</script>

<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
