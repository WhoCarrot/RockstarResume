import { Resume } from "@/assets/js/class/resume";
import store from '../store';
// initial state
const state = {
  resumeList: [],
};

// getters
const getters = {
  getResumeList: (state: any) => {
    return state.resumeList;
  },

};

// actions
const actions = {
  requestResumeList( state: any, commit: any ) {
    const returnedResumeList = [new Resume({ Id: 252 }), new Resume({ Id: 3462 })];
    // TODO Call to API to return the stored Resumes
    state.commit("setResumeList", returnedResumeList);
  },
  createResume(state: any, commit: any) {
    state.commit("addResume", new Resume());
  },

};

// mutations
const mutations = {
  setResumeList(state: any, resumeList: Resume[] ) {
    state.resumeList = resumeList;
  },

  addResume(state: any, newResume: Resume ) {
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
