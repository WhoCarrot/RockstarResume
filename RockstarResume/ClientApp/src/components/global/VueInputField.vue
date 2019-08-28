<template>
  <b-row>
    <b-col sm="5">
      <div v-if="textarea">
        <b-form-textarea
          :value="firstInput"
          @input="e => { $emit('firstInput', e)}"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </div>
      <div v-else>
        <b-form-input :value="firstInput" @input="e => { $emit('firstInput', e)}"></b-form-input>
      </div>
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
      <div v-if="textarea">
        <b-form-textarea
          :value="secondInput"
          @input="e => { $emit('secondInput', e)}"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </div>
      <div v-else>
        <b-form-input :value="secondInput" @input="e => { $emit('secondInput', e)}"></b-form-input>
      </div>
    </b-col>
    <b-col v-if="removable">
      <b-button variant="link" v-on:click="$emit('remove')" style="padding: 2px 8px;">
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
    },
    textarea: {
      type: Boolean,
      default: false
    },
    removable: {
      type: Boolean,
      default: true
    }  },
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