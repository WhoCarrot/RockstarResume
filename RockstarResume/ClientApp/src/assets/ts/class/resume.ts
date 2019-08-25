import { Model } from "@vuex-orm/core";
import DriversLicense from "./driversLicenses";
import Education from "./education";
import Language from "./language";

"use strict";

export default class Resume extends Model {
  static entity = "resumes";

  static fields() {
    return {
      id: this.attr(null),
      firstName: this.attr(""),
      lastName: this.attr(""),
      region: this.attr(""),
      nationality: this.attr(""),
      driversLicenses: this.attr([]),

      // relationships
      languageList: this.attr([{
        resume_id: this.id,
        language_name: "",
        language_level: 0
      }]),
      languages: this.hasMany(Language, "resume_id"),
      educations: this.hasMany(Education, "resume_id")
    };
  }
}
