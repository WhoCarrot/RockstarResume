import DualInputValue from "./dualInputValue";

"use strict";

export default class IntroQuestion3 extends DualInputValue {
  // Question on the introduction page
  // Which 3 things would you like to see in your future project?

  static entity = "intro_question_3";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields()
    };
  }
}
