 <template>
  <div>
    <!-- Qualities -->
    <vue-input-table
      :id="Number(Id)"
      type="quality"
      header="How do colleagues describe you?"
      buttontext="Add quality"
    />

    <!-- When do you thrive professionally? -->
    <vue-input-table
      :id="Number(Id)"
      type="thriveProfessionally"
      header="When do you thrive professionally?"
      :addbutton="false"
      :textarea="true"
      :removable="false"
    />

    <!-- What should colleagues need to know about you? -->
    <vue-input-table
      :id="Number(Id)"
      type="whatColleguesNeedToKnow"
      header="What should colleagues need to know about you?"
      :addbutton="false"
      :textarea="true"
      :removable="false"
    />

    <!-- Which 3 things would you like to see in your future project: -->
    <vue-input-table
      :id="Number(Id)"
      type="thingsInFutureProjects"
      header="Which 3 things would you like to see in your future project?"
      :removable="false"
      :addbutton="false"
    />
  </div>
</template>

<script>
import DualInputValue from "@/assets/ts/class/dualInputValue";
import VueInputTable from "@/components/VueInputTable.vue";

export default {
  name: "resumeIntroduction",
  data() {
    return {
    };
  },
  components: {
    VueInputTable,
  },
  props: {
    Id: {
      type: Number
    },
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>