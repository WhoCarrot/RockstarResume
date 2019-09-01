import { Model } from "@vuex-orm/core";

"use strict";

export default class Skill extends Model {
  static entity = "skills";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      category: this.attr(""),
    };
  }
}
