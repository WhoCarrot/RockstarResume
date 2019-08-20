import { Model } from "@vuex-orm/core";
import DriversLicense from "./driversLicenses";

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
      //driversLicenses: this.hasMany(DriversLicense, "resume_id")
    };
  }

  get ID(): Number {
    return this.id;
  }
}
