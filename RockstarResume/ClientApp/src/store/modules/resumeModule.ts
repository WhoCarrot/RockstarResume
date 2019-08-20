import store from "../store";
// pathify
import { make } from "vuex-pathify";

import Resume from "@/assets/ts/class/resume";

// initial state
const state = {
  resumeList: []
};

// getters
const getters = {
  resumeList: (state: any) =>
    state.resumeList.map((data: Resume) => new Resume(data)),
};

// actions
const actions = {
  requestResumeList(state: any, commit: any) {

    //TODO temporary data population
    // TODO Call to API to return the stored Resumes

    Resume.insert({
      data: [{ id: 252 }, { id: 3462 }]
    })
  },
};

// mutations
const mutations = {
  setResumeList(state: any, resumeList: Resume[]) {
    state.resumeList = resumeList;
  },

  addResume(state: any, newResume: Resume) {
    state.resumeList.push(newResume);
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
