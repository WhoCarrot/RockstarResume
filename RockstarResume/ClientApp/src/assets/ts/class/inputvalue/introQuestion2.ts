import DualInputValue from "./dualInputValue";

"use strict";

export default class IntroQuestion2 extends DualInputValue {
  // Question on the introduction page
  // What should colleagues need to know about you?

  static entity = "intro_question_2";
  // Reference to base entity name.
  static baseEntity = "dual_input_value";

  static fields() {
    return {
      ...super.fields()
    };
  }
}
