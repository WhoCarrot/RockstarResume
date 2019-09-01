import Resume from "@/assets/ts/class/resume";
import Language from "@/assets/ts/class/language";
import Education from "@/assets/ts/class/education";
import DualInputValue from "@/assets/ts/class/inputvalue/dualInputValue";
import Experience from "@/assets/ts/class/experience";

// initial state
const state = {};

// getters
const getters = {
  resumeData: (state: any) => (id: number) => {
    var data = Resume.query()
      .whereId(id)
      .withAllRecursive(5)
      .first();

    return data;
  },
  random_id: (state: any) => {
    return Math.round(Math.random() * (10000 - 1) + 1);
  },
  getFirstExperience: (state: any) => (id: number) => {
    return Experience.query()
      .withAllRecursive(5)
      .where("resume_id", id)
      .first();
  },
  getLastExperience: (state: any) => (id: number) => {
    return Experience.query()
      .withAllRecursive(5)
      .where("resume_id", id)
      .last();
  }
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
  addDualInputValue(state: any, payload: any) {
    state.commit("addDualInputValue", payload);
  },
  addResume(state: any) {
    const resume_id = Math.round(Math.random() * (10000 - 1) + 1);
    state.commit("createResume", resume_id);
  },
  addExperience(state: any, payload: any) {
    state.commit("createExperience", payload.resume_id);
  }
};

// mutations
const mutations = {
  setResumeList(state: any, resumeList: Resume[]) {
    state.resumeList = resumeList;
  },

  createResume(state: any, resume_id: number) {
    const exp_id = random_id();
    Resume.insertOrUpdate({
      data: {
        id: resume_id,
        // Introduction page
        qualities: [
          {
            resume_id,
            type: "quality"
          }
        ],
        introQuestion1: {
          id: random_id(),
          resume_id
        },
        introQuestion2: {
          id: random_id(),
          resume_id
        },
        introQuestion3: [
          {
            id: random_id(),
            resume_id
          },
          {
            id: random_id(),
            resume_id
          },
          {
            id: random_id(),
            resume_id
          }
        ],
        // Experience
        experiences: [
          {
            id: exp_id,
            resume_id,
            company_name: "",
            title: {
              id: random_id(),
              experience_id: exp_id,
              resume_id
            },
            branch: {
              id: random_id(),
              experience_id: exp_id,
              resume_id
            }
          }
        ],
        // Extra
        certificates: [
          {
            id: random_id(),
            resume_id
          }
        ],
        competenties: [
          {
            id: random_id(),
            resume_id
          }
        ],
        studies: [
          {
            id: random_id(),
            resume_id
          }
        ],
        interests: [
          {
            id: random_id(),
            resume_id
          }
        ]
      }
    });
  },
  createExperience(state: any, resume_id: number) {
    const exp_id = random_id();
    Experience.insertOrUpdate({
      data: {
        id: exp_id,
        resume_id,
        title: {
          id: random_id(),
          experience_id: exp_id,
          resume_id
        },
        branch: {
          id: random_id(),
          experience_id: exp_id,
          resume_id
        }
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
  addDualInputValue(state: any, payload: any) {
    DualInputValue.insert({
      data: {
        resume_id: Number(payload.resume_id),
        type: payload.type
      }
    });
  }
};

function random_id() {
  return Math.round(Math.random() * (10000 - 1) + 1);
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
