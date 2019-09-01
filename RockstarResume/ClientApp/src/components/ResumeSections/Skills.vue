<template>
  <div>
    <!-- Import LinkedIn Skills -->
    <vue-button text="Import LinkedIn Skills" v-b-modal.modal-1 />
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">This is where you will be able to import LinkedIn skills</p>
    </b-modal>

    <!-- Add custom Skills -->
    <vue-button text="Add Skills" />

    <b-row class="my-2">
      <b-col sm="12">
        <div id="unsorted-container" class="skill-container">
          <draggable
            v-model="unsortedList"
            v-bind="dragOptions"
            tag="ul"
            @start="drag = true"
            @end="drag = false"
            group="a"
            emptyInsertThreshold="50"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <li
                class="list-group-item grid-square"
                v-for="element in unsortedList"
                :key="element.id"
              >
                <i
                  :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                ></i>
                {{ element.name }}
              </li>
            </transition-group>
          </draggable>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <!-- Top skills -->
      <b-col sm="4">
        <h5 class="text-center">Top skills</h5>
        <div class="skill-container">
          <draggable
            class="list-group"
            v-model="list"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            group="a"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <div class="list-group-item" v-for="element in list" :key="element.id">
                <i
                  :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                ></i>
                {{ element.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </b-col>
      <!-- Programming languages -->
      <b-col sm="4">
        <h5 class="text-center">Programming languages</h5>
        <div class="skill-container">
          <draggable
            class="list-group"
            v-model="list2"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            group="a"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <div class="list-group-item" v-for="element in list2" :key="element.id">
                <i
                  :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                ></i>
                {{ element.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </b-col>
      <!-- Tools -->
      <b-col sm="4">
        <h5 class="text-center">Tools</h5>
        <div class="skill-container">
          <draggable
            class="list-group"
            v-model="list3"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            group="a"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <div class="list-group-item" v-for="element in list3" :key="element.id">
                <i
                  :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                ></i>
                {{ element.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "resumeSkills",
  components: {
    draggable,
  },
  props: {
    Id: {
      type: Number
    },
  },
  data() {
    return {
      drag: false,
      list: [],
      unsortedList: [
        { name: "John 1", id: 0 },
        { name: "Joao 2", id: 1 },
        { name: "Jean 3", id: 2 },
        { name: "Jean 4", id: 3 },
        { name: "Jean 5", id: 4 },
        { name: "Jean 6", id: 5 },
        { name: "Jean 7", id: 6 },
        { name: "Jean 8", id: 7 }
      ],
      list2: [],
      list3: []
    };
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "a",
        disabled: false,
        ghostClass: "ghost",
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  width: 100%;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}

#unsorted-container {
  height: 200px;

  .grid-square,
  .ghost {
    width: 150px;
    height: 50px;
    display: inline-block;
    padding: 10px;
    margin: 6px;
  }
  .grid-square {
    background-color: #fff;
  }
}

.skill-container {
  border: 1px red solid;
  min-height: 100px;
}
</style>