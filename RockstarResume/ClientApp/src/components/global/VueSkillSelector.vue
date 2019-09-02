<template>
  <b-row class="my-2">
    <b-col>
      <vue-title :text="title" />
      <vue-tags-input
        v-model="tag"
        :tags="tags"
        @tags-changed="newTags => this.updateTags(newTags)"
        :autocomplete-items="filteredItems"
        :add-only-from-autocomplete="true"
        :add-on-key="[13, 9, ':', ';']"
      />
    </b-col>
  </b-row>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  name: "vue-skill-selector",
  data() {
    return {
      tag: '',
    };
  },
  props: {
    title: {
      type: String,
      default: "Title missing"
    },
    tags: {
      type: Array,
      default: () => []
    },
    autocompletelist: {
      type: Array,
      default: () => []
    }
  },
  components: {
    VueTagsInput,
  },
  computed: {
    filteredItems() {
      return this.autocompletelist.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    updateTags(newTags) {
      console.log(newTags);

      this.$emit('tagsUpdate', newTags)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>