 <template>
  <div>
    <!-- Qualities -->
    <vue-input-table
      :id="Number(Id)"
      :classmodal="quality"
      header="How do colleagues describe you?"
      buttontext="Add quality"
    />

    <!-- When do you thrive professionally? -->
    <vue-input-table
      :id="Number(Id)"
      :classmodal="introQuestion1Value"
      header="When do you thrive professionally?"
      :addbutton="false"
      :textarea="true"
      :removable="false"
    />

    <!-- What should colleagues need to know about you? -->
    <vue-input-table
      :id="Number(Id)"
      header="What should colleagues need to know about you?"
      :classmodal="introQuestion2Value"
      :addbutton="false"
      :textarea="true"
      :removable="false"
    />

    <!-- Which 3 things would you like to see in your future project: -->
    <vue-input-table
      :id="Number(Id)"
      :classmodal="introQuestion3Value"
      header="Which 3 things would you like to see in your future project?"
      :removable="false"
      :addbutton="false"
    />
  </div>
</template>

<script>
import DualInputValue from "@/assets/ts/class/inputvalue/dualInputValue";
import VueInputTable from "@/components/VueInputTable.vue";
import Quality from "@/assets/ts/class/inputvalue/quality"
import IntroQuestion1 from "@/assets/ts/class/inputvalue/introQuestion1"
import IntroQuestion2 from "@/assets/ts/class/inputvalue/introQuestion2"
import IntroQuestion3 from "@/assets/ts/class/inputvalue/introQuestion3"

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
    quality: function () {
      return Quality;
    },
    introQuestion1Value: function () {
      return IntroQuestion1;
    },
    introQuestion2Value: function () {
      return IntroQuestion2;
    },
    introQuestion3Value: function () {
      return IntroQuestion3;
    },
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>