import { Model } from "@vuex-orm/core";
import Resume from './resume';
import ItemValue from './itemValue';

"use strict";

export default class DriversLicense extends Model {
  static entity = "drivers_licenses";

  static fields() {
    return {
      id: this.increment(),
      resume_id: this.attr(null),
      licence_code: this.attr(""),
      items: this.attr([]),
      // relationships
      licenses: this.hasManyBy(ItemValue, "items")
 
    };
  }
}
