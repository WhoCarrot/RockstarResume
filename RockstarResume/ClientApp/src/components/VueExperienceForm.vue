 <template>
  <b-modal id="vue-experience-modal" size="xl" :title="modalTitle" @ok="saveExperience()">
    <b-container fluid v-if="validExperience">
      <b-row class="my-2">
        <b-col sm="6">
          <b-form-input
            id="input-first-name"
            :value="this.experience.company_name"
            @input="e => { updateInput({company_name : e}) }"
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
            @firstInput="e => { updateDualInput({
              id: this.experience.title.id,
              english_value: this.experience.title.english_value,
              dutch_value : e})}"
            @secondInput="e => { updateDualInput({
                id: this.experience.title.id,
                english_value : e, 
                dutch_value :this.experience.title.dutch_value})}"
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
            @firstInput="e => { updateDualInput({
              id: this.experience.branch.id,
              english_value: this.experience.branch.english_value,
              dutch_value : e})}"
            @secondInput="e => { updateDualInput({
                id: this.experience.branch.id,
                english_value : e, 
                dutch_value :this.experience.branch.dutch_value})}"
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
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    experience: {
      type: Object,
      required: true,
    },
    experienceid: {
      type: Number,
      required: true,
    },
  },
  computed: {
    validExperience: function () {
      return !(this.experience == null)
    },
    modalTitle: function () {
      return "Edit Resume with id:" + this.getExpId();
    }
  },
  methods: {
    getExpId() {
      return this.experienceid;
    },
    updateInput(data) {
      Experience.update({
        where: this.experience.id,
        data
      });
    },
    updateDualInput(data) {
      DualInputValue.update(data);
    },
    saveExperience: function () {
      // Experience.update(this.experience)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>