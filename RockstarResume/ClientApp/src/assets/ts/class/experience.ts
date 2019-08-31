import { Model } from "@vuex-orm/core";
import DriversLicense from "./driversLicenses";
import Education from "./education";
import Language from "./language";
import DualInputValue from "./dualInputValue";
import Skill from './skill';

"use strict";

export default class Experience extends Model {
  [x: string]: any;
  static entity = "experience";

  static fields() {
    return {
      // Profile
      id: this.increment(),
      resume_id: this.attr(null),

      companyName: this.attr(""),
      city: this.attr(""),
      date_from: this.attr(""),
      date_to: this.attr(""),

      title: this.hasOne(DualInputValue, "experience_id"),
      branch: this.hasOne(DualInputValue, "experience_id"),
      programmingLanguages: this.hasMany(Skill, "resume_id"),

    };
  }
  
  get header() {
    return `${this.companyName}` + " (" + `${this.city}` + ")";
  }

  get period() {
    let dateTo = "present";

    if (`${ this.date_to }`) {
      dateTo = `${ this.date_to }`;
    }

    return `${this.date_from}` + " - " + `${this.date_to}`;
  }
}
