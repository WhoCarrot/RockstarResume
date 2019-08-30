 <template>
  <b-row class="my-4">
    <b-col>
      <b-row>
        <b-col>
          <vue-title :text="this.header" />
        </b-col>
      </b-row>
      <vue-input-label firstLabel="Dutch" secondLabel="English" />
      <b-row v-for="item in itemList" :key="item.id" class="my-1">
        <b-col sm="12">
          <vue-input-field
            :firstInput="item.dutch_value"
            :secondInput="item.english_value"
            @firstInput="e => { updateRow(item, {dutch_value : e}) }"
            @secondInput="e => { updateRow(item, {english_value : e}) }"
            @remove="removeRow(item.id)"
            :textarea="textarea"
            :removable="removable"
          />
        </b-col>
      </b-row>
      <div v-if="this.addbutton">
        <vue-button :text="this.buttontext" @click="addRow()" />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import DualInputValue from "@/assets/ts/class/dualInputValue";

export default {
  name: "inputTable",
  data() {
    return {
    };
  },
  props: {
    id: {
      type: Number
    },
    header: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    addbutton: {
      type: Boolean,
      default: true
    },
    buttontext: {
      type: String,
      default: "Missing button text"
    },
    textarea: {
      type: Boolean,
      default: false
    },
    removable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    itemList: function () {
      return DualInputValue.query()
        .where("resume_id", this.id)
        .where('type', this.type)
        .get();
    },
    itemListLength: function () {
      return this.itemList.length;
    }
  },
  methods: {
    addRow: function () {
      this.$store.dispatch("resume/addDualInputValue", {
        resume_id: this.id,
        type: this.type
      });
    },
    updateRow(row, data) {
      DualInputValue.update({
        where: row.id,
        data
      });
    },
    removeRow: function (index) {
      if (this.itemListLength > 1) {
        DualInputValue.delete(index);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>