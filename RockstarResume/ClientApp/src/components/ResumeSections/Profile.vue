<template>
  <b-container class="profile">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>
    <div>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="type-text">Type</label>
        </b-col>
        <b-col sm="6">
          <b-form-input id="type-text" type="text"></b-form-input>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "resumeProfile",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  props: {},

  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
