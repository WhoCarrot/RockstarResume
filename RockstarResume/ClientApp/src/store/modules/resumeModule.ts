import Resume from "@/assets/ts/class/resume";
import Language from "@/assets/ts/class/language";
import Education from "@/assets/ts/class/education";
import DualInputValue from "@/assets/ts/class/dualInputValue";

// initial state
const state = {};

// getters
const getters = {
  resumeData: (state: any) => (id: number) => {
    var data = Resume.query()
      .whereId(id)
      //.with("thriveProfessionally")
      .withAll()
      .first();

    if (data) {
      // This is done because I use the same model DualInputValue to set the relationships in Resume model.
      // Vuex-orm can therefore not differentiate because it doesnt account for the type property, which it is now being filtered on.
      // Only add relationshipfields which are "this.hasMany(DualInputValue, "resume_id")"
      var types = [
        "qualities",
        "thingsInFutureProjects",
        "certificates",
        "competenties",
        "studies",
        "hobbiesAndInterests"
      ];
      for (let i = 0; i < types.length; i++) {
        let type = types[i];
        if (data[type] && data[type].length > 0) {
          data[type] = data[type].filter(
            (obj: DualInputValue) => obj.type === type
          );
        }
      }
    }

    return data;
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
          type: "thriveProfessionally",
          dutch_value: "LOL",
          english_value: "BBQ"
        },
        whatColleguesNeedToKnow: {
          resume_id,
          type: "whatColleguesNeedToKnow",
          dutch_value: "LOL",
          english_value: "BBQ"
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
        ],
        certificates: [
          {
            resume_id,
            type: "certificates"
          }
        ],
        competenties: [
          {
            resume_id,
            type: "competenties"
          }
        ],
        studies: [
          {
            resume_id,
            type: "studies"
          }
        ],
        hobbiesAndInterests: [
          {
            resume_id,
            type: "hobbiesAndInterests"
          }
        ],

      }
    });

    // DualInputValue.insert({
    //   data: {
    //     resume_id, type: "thriveProfessionally",
    //     dutch_value: "LOL",
    //     english_value: "BBQ"
    //   }
    // });

    // DualInputValue.insert({
    //   data: {
    //     resume_id, type: "whatColleguesNeedToKnow",
    //     dutch_value: "LOL",
    //     english_value: "BBQ"
    //   }
    // });
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

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
