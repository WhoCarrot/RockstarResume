import { Model } from "@vuex-orm/core";
import Resume from "./resume";
import ItemValue from "./itemValue";

"use strict";

export default class Education extends Model {
  static entity = "educations";

  static fields() {
    return {
      id: this.increment(),
      resume_id: this.attr(null),
      education_name: this.attr(""),
      education_institution: this.attr(""),
      date_from: this.attr(""),
      date_to: this.attr(""),
      diploma: this.attr(false),
      // relationships
      resume: this.belongsTo(Resume, "resume_id")
    };
  }
}
