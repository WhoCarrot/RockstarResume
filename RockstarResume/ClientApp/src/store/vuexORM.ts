import VuexORM from "@vuex-orm/core";

import Resume from "@/assets/ts/class/resume";
import DriversLicense from "@/assets/ts/class/driversLicenses";
import ItemValue from "@/assets/ts/class/itemValue";
import Language from "@/assets/ts/class/language";
import Education from "@/assets/ts/class/education";
import Experience from "@/assets/ts/class/experience";
import Skill from "@/assets/ts/class/skill";

// Inherits DualInputValue
import DualInputValue from "@/assets/ts/class/dualInputValue";

// Create a new database instance.
const database = new VuexORM.Database();

// Register Models to the database.
database.register(Resume);
database.register(DriversLicense);
database.register(Language);
database.register(Education);
database.register(ItemValue);
database.register(Skill);
database.register(DualInputValue);
database.register(Experience);

export { VuexORM, database };
