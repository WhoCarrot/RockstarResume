import { Model } from "@vuex-orm/core";

"use strict";

export default class Resume extends Model {
  static entity = "resumes";
  public Id: number = 0;
  public FirstName: String = "";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.attr(null),
      firstName: this.attr(""),
      lastName: this.attr(""),

      email: this.attr("")
    };
  }
  // constructor(init?: Partial<Resume>) {
  //   Object.assign(this, init);
  // }
}

export { Resume };
