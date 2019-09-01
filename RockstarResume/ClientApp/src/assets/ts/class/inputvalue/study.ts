import DualInputValue from "./dualInputValue";

"use strict";

export default class Study extends DualInputValue {

  static entity = "studies";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields()
    };
  }
}
