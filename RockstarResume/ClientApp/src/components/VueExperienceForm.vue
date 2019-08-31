 <template>
  <b-modal id="vue-experience-modal" size="xl" title="Edit Resume" @ok="saveExperience()">
    <b-container fluid>
      <b-row class="my-2">
        <b-col sm="6">
          <b-form-input
            id="input-first-name"
            :value="this.experience.companyName"
            @input="e => { updateInput({companyName : e}) }"
            type="text"
            placeholder="Company name"
            required
          ></b-form-input>
        </b-col>
        <b-col sm="6">
          <b-form-input
            id="input-last-name"
            :value="this.experience.city"
            @input="e => { updateInput({city : e}) }"
            type="text"
            placeholder="City"
            required
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-2">
        <b-col sm="6">
          <vue-date-picker
            :value="this.experience.date_from"
            @input="e => { updateInput({date_from : e}) }"
            placeholder="Start date"
          ></vue-date-picker>
        </b-col>
        <b-col sm="6">
          <vue-date-picker
            :value="this.experience.date_to"
            @input="e => { updateInput({date_to : e}) }"
            placeholder="End date"
          ></vue-date-picker>
        </b-col>
      </b-row>
      <!-- Experience title -->
      <b-row class="my-4">
        <b-col>
          <b-row>
            <b-col>
              <vue-title text="Title" />
            </b-col>
          </b-row>
          <vue-input-label />
          <vue-input-field
            :firstInput="this.experience.title.dutch_value"
            :secondInput="this.experience.title.english_value"
            @firstInput="e => { updateInput({title:{english_value: this.experience.title.english_value, dutch_value : e}}) }"
            @secondInput="e => { updateInput({title:{english_value : e, dutch_value :this.experience.title.dutch_value}}) }"
            :removable="false"
          />
        </b-col>
      </b-row>
      <!-- Experience Branch -->
      <b-row class="my-4">
        <b-col>
          <b-row>
            <b-col>
              <vue-title text="Branch" />
            </b-col>
          </b-row>
          <vue-input-label />
          <vue-input-field
            :firstInput="this.experience.branch.dutch_value"
            :secondInput="this.experience.branch.english_value"
            @firstInput="e => { updateInput({branch:{english_value: this.experience.branch.english_value, dutch_value : e}}) }"
            @secondInput="e => { updateInput({branch:{english_value : e, dutch_value :this.experience.branch.dutch_value}}) }"
            :removable="false"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <pre>{{experience}}</pre>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import DualInputValue from "@/assets/ts/class/inputvalue/dualInputValue";
import Experience from "@/assets/ts/class/experience";

export default {
  name: "vueExperienceForm",
  data() {
    return {
      // experience: {
      //   id: this.experienceid,
      //   resume_id: this.id,
      //   companyName: "",
      //   city: "",
      //   date_from: "",
      //   date_to: "",
      // }
    };
  },
  props: {
    experience: {
      type: Object,
      required: true,

    },
  },
  computed: {
    // experience: function () {
    //   return Experience.query()
    //     .where("resume_id", this.id)
    //     .where('id', this.experienceid)
    //     .first();
    // },
  },
  methods: {
    updateInput(data) {
      Experience.update({
        where: this.experience.id,
        data
      });
    },
    saveExperience: function () {
      Experience.update(this.experience)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>