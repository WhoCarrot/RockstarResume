import DualInputValue from "./dualInputValue";

"use strict";

export default class Certificate extends DualInputValue {

  static entity = "certificates";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields()
    };
  }
}
