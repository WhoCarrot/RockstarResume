import DualInputValue from "./dualInputValue";

"use strict";

export default class ExperienceBranch extends DualInputValue {
  
  static entity = "experience_branch";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields(),
      experience_id: this.attr(null),

    };
  }
}
