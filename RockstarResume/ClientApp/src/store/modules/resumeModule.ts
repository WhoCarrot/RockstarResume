import store from "../store";
// pathify
import { make } from "vuex-pathify";

import { Resume } from "@/assets/ts/class/resume";

// initial state
const state = {
  resumeList: []
};

// getters
const getters = {
  resumeList: (state: any) =>
    state.resumeList.map((data: Resume) => new Resume(data)),

  getResumeList: (state: any) => {
    return state.resumeList;
  },
  getResume: (state: any) => (id: Number) => {
    return state.getters.getResumeList.find(
      (resume: Resume) => resume.Id === id
    );
  }
};

// actions
const actions = {
  requestResumeList(state: any, commit: any) {

    //TODO temporary data population
    // TODO Call to API to return the stored Resumes

    Resume.insert({
      data: [{ Id: 252 }, { Id: 3462 }]
    })
  },
  createResume(state: any, commit: any) {
    state.commit("addResume", new Resume());
  },
  updateResume(state: any, commit: any) {
    state.commit("addResume", new Resume());
  },
  setResumeProp(state: any, payload: any) {
    var g = state.resumeList;
    console.log(payload);
    state.commit("setResumeProp", payload);
  }
};

// mutations
const mutations = {
  setResumeList(state: any, resumeList: Resume[]) {
    state.resumeList = resumeList;
  },

  addResume(state: any, newResume: Resume) {
    state.resumeList.push(newResume);
  },

  setResumeProp(state: any, payload: any) {

    if (!state.resumeList || state.resumeList.length === 0) {
      actions.
    }
    state.resumeList.find((x: Resume) => x.Id === payload.Id)[payload.prop] =
      payload.value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
