import DualInputValue from "./dualInputValue";

"use strict";

export default class Competency extends DualInputValue {
  // Question on the introduction page
  // What should colleagues need to know about you?

  static entity = "competenties";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields()
    };
  }
}
