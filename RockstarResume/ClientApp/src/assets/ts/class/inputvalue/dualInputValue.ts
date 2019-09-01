import { Model } from "@vuex-orm/core";
import Quality from './quality';
import IntroQuestion1 from './introQuestion1';
import IntroQuestion2 from './introQuestion2';
import IntroQuestion3 from './introQuestion3';
import Study from './study';
import Competency from './competency';
import Interests from './interests';
import Certificate from './certificate';

"use strict";

export default class DualInputValue extends Model {
  static entity = "dual_input_value";

  // This gives an console error when enabled, this is a Vuex-ORM bug
  // static types() {
  //   return {
  //     QUALITY: Quality,
  //     INTROQUESTION1: IntroQuestion1,
  //     INTROQUESTION2: IntroQuestion2,
  //     INTROQUESTION3: IntroQuestion3,
  //     STUDY: Study,
  //     COMPETENCY: Competency,
  //     INTERESTS: Interests,
  //     CERTIFICATE: Certificate
  //   };
  // }
  static fields() {
    return {
      id: this.increment(),
      resume_id: this.attr(null),
      dutch_value: this.attr(""),
      english_value: this.attr("")
    };
  }
}
