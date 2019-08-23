import store from "../store";
// pathify
import { make } from "vuex-pathify";

import Resume from "@/assets/ts/class/resume";
import Language from "@/assets/ts/class/language";

// initial state
const state = {
  resumeList: []
};

// getters
const getters = {
  resumeList: (state: any) =>
    state.resumeList.map((data: Resume) => new Resume(data))
};

// actions
const actions = {
  requestResumeList(state: any, commit: any) {
    //TODO temporary data population
    // TODO Call to API to return the stored Resumes

    Resume.insert({
      data: [{ id: 252 }, { id: 3462 }]
    });
  },
  addLanguage(state: any, payload: any) {
    console.log(payload);

    Language.insert({
      data: {
        resume_id: payload.resume_id,
        language_name: "",
        language_level: 0
      }
    });
  },
  addResume(state: any, commit: any) {
    commit('resume/addResume')
  },
};

// mutations
const mutations = {
  setResumeList(state: any, resumeList: Resume[]) {
    state.resumeList = resumeList;
  },

  addResume(state: any) {
    Resume.insert({ data: {} });
  },

  addLanguage(state: any, resumeId: Number) {
    Language.insert({
      data: {
        resume_id: resumeId,
        language_name: "",
        language_level: 0
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
