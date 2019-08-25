<template>
  <div class="my-1">
    <date-picker
      :value="date"
      @change="dateChange"
      :placeholder="placeholder"
      type="month"
      format="MM-YYYY"
      lang="en"
      valueType="format"
      :editable="false"
      :first-day-of-week="1"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
  name: "vue-date-picker",
  components: {
    DatePicker
  },
  data() {
    return {
      lang: {
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        pickers: [
          "next 7 days",
          "next 30 days",
          "previous 7 days",
          "previous 30 days"
        ]
      }
    };
  },
  props: ["dateValue", "value", "placeholder"],
  computed: {
    date() {
      console.log(this.dateValue);

      return this.dateValue;
    }
  },
  methods: {
    dateChange(date) {
      console.log(date);
      this.$emit("value", date);
    }
  }
};
</script>

<style lang='scss' scoped>
.mx-datepicker {
  width: 100% !important;
  height: 38px !important;
  font-size: 16px !important;
  .mx-input-wrapper {
    .mx-input {
      font-size: 16px !important;
    }
  }
}
</style>