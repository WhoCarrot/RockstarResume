import Resume from "@/assets/ts/class/resume";
import Language from "@/assets/ts/class/language";
import Education from "@/assets/ts/class/education";
import DualInputValue from "@/assets/ts/class/dualInputValue";

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
    state.commit("createResume", 999);
    state.commit("createResume", 4444);
  },
  addLanguage(state: any, payload: any) {
    state.commit("addLanguage", payload.resume_id);
  },
  addEducation(state: any, payload: any) {
    state.commit("addEducation", payload.resume_id);
  },
  addQuality(state: any, payload: any) {
    state.commit("addQuality", payload.resume_id);
  },
  addResume(state: any) {
    const resume_id = Math.round(Math.random() * (10000 - 1) + 1);
    state.commit("createResume", resume_id);
  }
};

// mutations
const mutations = {
  setResumeList(state: any, resumeList: Resume[]) {
    state.resumeList = resumeList;
  },

  createResume(state: any, resume_id: number) {
    Resume.insertOrUpdate({
      data: {
        id: resume_id,
        qualities: [{ resume_id, type: "quality" }],
        thriveProfessionally: {
          resume_id,
          type: "thriveProfessionally"
        },
        whatColleguesNeedToKnow: {
          resume_id,
          type: "whatColleguesNeedToKnow"
        },
        thingsInFutureProjects: [
          {
            resume_id,
            type: "thingsInFutureProjects"
          },
          {
            resume_id,
            type: "thingsInFutureProjects"
          },
          {
            resume_id,
            type: "thingsInFutureProjects"
          }
        ]
      }
    });
  },
  addLanguage(state: any, resume_id: number) {
    Language.insert({
      data: {
        resume_id: Number(resume_id),
        language_name: "",
        language_level: 0
      }
    });
  },
  addEducation(state: any, resume_id: number) {
    Education.insert({
      data: {
        resume_id: Number(resume_id),
        education_name: "",
        education_institution: "",
        date_from: "",
        date_to: "",
        diploma: false
      }
    });
  },
  addQuality(state: any, resume_id: number) {
    DualInputValue.insert({
      data: {
        resume_id: Number(resume_id),
        type: "quality"
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
