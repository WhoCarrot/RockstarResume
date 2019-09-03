import Resume from "@/assets/ts/class/resume";
import Language from "@/assets/ts/class/language";
import Education from "@/assets/ts/class/education";
import DualInputValue from "@/assets/ts/class/inputvalue/dualInputValue";
import Experience from "@/assets/ts/class/experience";

import Skills from "@/assets/ts/class/skill";
import SkillsProgrammingLanguages from "@/assets/ts/data/skills.programminglanguages";
import SkillsProgrammingTools from "@/assets/ts/data/skills.programmingtools";
import SkillsDatabases from "@/assets/ts/data/skills.databases";
import SkillsOperatingsystems from "@/assets/ts/data/skills.operatingsystems";

// initial state
const state = {
  setupResumeHasRun: false
};

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
  setupResumeData(state: any) {
    // Only run once
    if (!state.setupResumeHasRun) {
      state.commit("setupResumeData");
    }
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
  setupResumeData(state: any) {
    state.setupResumeHasRun = true;

    // Insert all default skills
    Skills.insertOrUpdate({
      data: SkillsProgrammingLanguages
    });

    Skills.insertOrUpdate({
      data: SkillsProgrammingTools
    });

    Skills.insertOrUpdate({
      data: SkillsDatabases
    });

    Skills.insertOrUpdate({
      data: SkillsOperatingsystems
    });
  },

  createResume(state: any, resume_id: number) {
    const exp_id = random_id();
    Resume.insertOrUpdate({
      data: {
        id: resume_id,
        // Introduction page
        resume_title: "Test Resume with ID: " + resume_id,

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
            company_name: "Team Rockstars IT",
            city: "Den Bosch",
            date_from: "03-2012",
            date_to: "11-2019",
            title: {
              id: random_id(),
              experience_id: exp_id,
              resume_id
            },
            branch: {
              id: random_id(),
              experience_id: exp_id,
              resume_id
            },
            programming_languages_ids: [5, 90, 45],
            programming_frameworks_ids: [],
            programming_operating_systems_ids: [],
            work_description: {
              id: random_id(),
              experience_id: exp_id,
              resume_id,
              english_value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed leo cursus libero auctor iaculis nec et risus. Integer dictum eros et purus feugiat bibendum. Ut faucibus sem in elit malesuada, in scelerisque urna aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus iaculis sapien in sollicitudin. Pellentesque lobortis lorem maximus ipsum sollicitudin, et sagittis velit mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sit amet dignissim mi. Aliquam a est in mi porta blandit. Nam quis auctor velit. Suspendisse lobortis ullamcorper eros sit amet pharetra. "
            },
            work_activities: [
              {
                id: random_id(),
                experience_id: exp_id,
                resume_id,
                english_value:
                  "Nullam efficitur nisl dictum, porta sem quis, vestibulum tortor. Sed pulvinar orci eget ipsum pellentesque mollis. Nam pellentesque ex eu porta scelerisque."
              },
              {
                id: random_id(),
                experience_id: exp_id,
                resume_id,
                english_value:
                  "Nullam efficitur nisl dictum, porta sem quis, vestibulum tortor. Sed pulvinar orci eget ipsum pellentesque mollis. Nam pellentesque ex eu porta scelerisque."
              },
              {
                id: random_id(),
                experience_id: exp_id,
                resume_id,
                english_value:
                  "Nullam efficitur nisl dictum, porta sem quis, vestibulum tortor. Sed pulvinar orci eget ipsum pellentesque mollis. Nam pellentesque ex eu porta scelerisque."
              }
            ]
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
        },
        programming_languages_ids: [],
        programming_frameworks_ids: [],
        programming_operating_systems: [],
        work_description: {
          id: random_id(),
          experience_id: exp_id,
          resume_id
        },
        work_activities: [
          {
            id: random_id(),
            experience_id: exp_id,
            resume_id
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
