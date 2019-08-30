import { Model } from "@vuex-orm/core";
import DriversLicense from "./driversLicenses";
import Education from "./education";
import Language from "./language";
import DualInputValue from "./dualInputValue";
import Experience from "./experience";

"use strict";

export default class Resume extends Model {
  [x: string]: any;
  static entity = "resumes";

  static fields() {
    return {
      // Profile
      id: this.attr(null),
      firstName: this.attr(""),
      lastName: this.attr(""),
      region: this.attr(""),
      nationality: this.attr(""),
      driversLicenses: this.attr([]),
      languages: this.hasMany(Language, "resume_id"),
      educations: this.hasMany(Education, "resume_id"),

      //Introduction
      qualities: this.hasMany(DualInputValue, "resume_id"),
      thriveProfessionally: this.hasOne(DualInputValue, "resume_id"),
      whatColleguesNeedToKnow: this.hasOne(DualInputValue, "resume_id"),
      thingsInFutureProjects: this.hasMany(DualInputValue, "resume_id"),

      //Experience
      experiences: this.hasMany(Experience, "resume_id"),

      //Extra
      certificates: this.hasMany(DualInputValue, "resume_id"),
      competenties: this.hasMany(DualInputValue, "resume_id"),
      studies: this.hasMany(DualInputValue, "resume_id"),
      hobbiesAndInterests: this.hasMany(DualInputValue, "resume_id")
    };
  }
}
