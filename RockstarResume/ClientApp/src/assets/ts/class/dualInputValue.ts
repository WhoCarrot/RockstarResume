import { Model } from "@vuex-orm/core";

"use strict";

export default class DualInputValue extends Model {
  static entity = "dualinputvalue";

  static fields() {
    return {
      id: this.increment(),
      resume_id: this.attr(null),
      type: this.attr(""),
      dutch_value: this.attr(""),
      english_value: this.attr(""),
    };
  }
}
 