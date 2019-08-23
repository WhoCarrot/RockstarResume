import store from "../store";
// pathify
import { make } from "vuex-pathify";

import Resume from "@/assets/ts/class/resume";
import Language from "@/assets/ts/class/language";

// initial state
const state = {};

// getters
const getters = {
  resumeData: (state: any) => (id: number) =>
    Resume.query()
      .whereId(id)
      .withAll()
      .first()
};

// actions
const actions = {
  requestResumeList(state: any, commit: any) {
    //TODO temporary data population
    // TODO Call to API to return the stored Resumes

    Resume.insertOrUpdate({
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
    state.commit("addResume");
  }
};

// mutations
const mutations = {
  setResumeList(state: any, resumeList: Resume[]) {
    state.resumeList = resumeList;
  },

  addResume(state: any) {
    const id = Math.round(Math.random() * (10000 - 1) + 1);
    Resume.insert({ data: { id} });
  },

  addLanguage(state: any, resumeId: number) {
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
