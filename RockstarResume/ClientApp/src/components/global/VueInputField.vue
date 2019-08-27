<template>
  <b-row>
    <b-col sm="5">
      <b-form-input v-model="firstInputValue" placeholder></b-form-input>
    </b-col>
    <b-col cols="12" md="auto" class="p-0">
      <b-button class="translate-button" variant="outline-primary" style>
        <font-awesome-icon icon="arrow-left" style />
      </b-button>
      <img src="@/assets/img/Google-Translate-icon.png" width="38" height="38" />
      <b-button class="translate-button" variant="outline-primary">
        <font-awesome-icon icon="arrow-right" />
      </b-button>
    </b-col>
    <b-col sm="5">
      <b-form-input v-model="secondInputValue" placeholder></b-form-input>
    </b-col>
    <b-col cols="12" md="auto" class="p-0">
      <b-button
        variant="link"
        v-on:click="removeLanguageRow(language.id)"
        style="padding: 2px 8px;"
      >
        <font-awesome-icon icon="trash" style="font-size: 28px" />
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "vue-input-field",
  data() {
    return {
      text: ""
    };
  },
  props: {
    firstInput: {
      type: String,
      default: ""
    },
    secondInput: {
      type: String,
      default: ""
    }
  },
  computed: {
    firstInputValue: {
      get() {
        return this.firstInput;
      },
      set(value) {
        this.$emit("update:firstInput", value);
      }
    },
    secondInputValue: {
      get() {
        return this.secondInput;
      },
      set(value) {
        this.$emit("update:secondInput", value);
      }
    }
  },
  methods: {
    removeRow() {}
  }
};
</script>

<style lang="scss" scoped>
.translate-button {
  padding: 0.25rem 0.5rem;
  .font-awesome-icon {
    font-size: 18px;
    margin-top: 5px;
  }
}
</style>