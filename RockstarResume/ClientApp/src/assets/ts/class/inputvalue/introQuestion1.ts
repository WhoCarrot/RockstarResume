import DualInputValue from "./dualInputValue";

"use strict";

export default class IntroQuestion1 extends DualInputValue {
  // Question on the introduction page
  // When do you thrive professionally?

  static entity = "intro_question_1";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields()
    };
  }
}
