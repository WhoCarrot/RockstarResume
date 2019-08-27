import { Model } from "@vuex-orm/core";
import Resume from "./resume";

"use strict";

export default class Language extends Model {
  static entity = "languages";

  static fields() {
    return {
      id: this.increment(),
      resume_id: this.attr(null),
      language_name: this.attr(""),
      language_level: this.attr(""),
      // relationships
      resume: this.belongsTo(Resume, "resume_id")
    };
  }
}
