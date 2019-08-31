import DualInputValue from './dualInputValue';

"use strict";

export default class Quality extends DualInputValue {
  static entity = "quality";
  // Reference to base entity name.
  static baseEntity = 'dual_input_value' 

  static fields() {
    return {
      ...super.fields(),

    };
  }
}
