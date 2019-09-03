import { Model } from "@vuex-orm/core";
import Skill from './skill';
import ExperienceTitle from './inputvalue/experienceTitle';
import ExperienceBranch from './inputvalue/experienceBranch';
import ExperienceWorkDescription from './inputvalue/experienceWorkDescription';
import ExperienceWorkActivities from './inputvalue/experienceWorkActivities';

"use strict";

export default class Experience extends Model {
  [x: string]: any;
  static entity = "experience";

  static fields() {
    return {
      // Profile
      id: this.increment(),
      resume_id: this.attr(null),

      company_name: this.attr(""),
      city: this.attr(""),
      date_from: this.attr(""),
      date_to: this.attr(""),

      title: this.hasOne(ExperienceTitle, "experience_id"),
      branch: this.hasOne(ExperienceBranch, "experience_id"),

      programming_languages_ids: this.attr([]),
      programming_languages: this.hasManyBy(Skill, "programming_languages_ids"),

      programming_frameworks_ids: this.attr([]),
      programming_frameworks: this.hasManyBy(Skill, "programming_frameworks_ids"),

      programming_databases_ids: this.attr([]),
      programming_databases: this.hasManyBy(Skill, "programming_databases_ids"),

      programming_operating_systems_ids: this.attr([]),
      programming_operating_systems: this.hasManyBy(Skill, "programming_operating_systems_ids"),


      work_description: this.hasOne(ExperienceWorkDescription, "experience_id"),
      work_activities: this.hasMany(ExperienceWorkActivities, "experience_id"),
    };
  }
  
  get header() {
    return `${this.company_name}` + " (" + `${this.city}` + ")";
  }

  get period() {
    let dateTo = "present";

    if (`${ this.date_to }`) {
      dateTo = `${ this.date_to }`;
    }

    return `${this.date_from}` + " - " + dateTo;
  }
}
