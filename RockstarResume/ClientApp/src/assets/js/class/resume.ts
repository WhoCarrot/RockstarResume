"use strict";

class Resume {
  public Id: number = 0;

  constructor(init?: Partial<Resume>) {
    Object.assign(this, init);
  }
}

export { Resume };
