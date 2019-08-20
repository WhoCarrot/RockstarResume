import { Model } from "@vuex-orm/core";

"use strict";

export default class ItemValue extends Model {
  static entity = "item_value";

  static fields() {
    return {
      id: this.attr(null),
      item_value: this.attr(""),
    };
  }
}
