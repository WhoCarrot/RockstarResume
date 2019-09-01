import { Model } from "@vuex-orm/core";
import DriversLicense from "./driversLicenses";
import Education from "./education";
import Language from "./language";
import DualInputValue from "./inputvalue/dualInputValue";
import Experience from "./experience";
import Quality from "./inputvalue/quality";
import IntroQuestion2 from "./inputvalue/introQuestion2";
import IntroQuestion1 from "./inputvalue/introQuestion1";
import IntroQuestion3 from "./inputvalue/introQuestion3";
import Certificate from './inputvalue/certificate';
import Competency from './inputvalue/competency';
import Study from './inputvalue/study';
import Interests from './inputvalue/interests';

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
      qualities: this.hasMany(Quality, "resume_id"),
      introQuestion1: this.hasOne(IntroQuestion1, "resume_id"),
      introQuestion2: this.hasOne(IntroQuestion2, "resume_id"),
      introQuestion3: this.hasMany(IntroQuestion3, "resume_id"),

      //Experience
      experiences: this.hasMany(Experience, "resume_id"),

      //Extra
      certificates: this.hasMany(Certificate, "resume_id"),
      competenties: this.hasMany(Competency, "resume_id"),
      studies: this.hasMany(Study, "resume_id"),
      interests: this.hasMany(Interests, "resume_id"),
    };
  }
}
