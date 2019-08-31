import DualInputValue from "./dualInputValue";

"use strict";

export default class Interests extends DualInputValue {

  static entity = "interests";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields()
    };
  }
}
