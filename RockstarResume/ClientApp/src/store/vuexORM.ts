import VuexORM from "@vuex-orm/core";

import Resume from "@/assets/ts/class/resume";
import DriversLicense from "@/assets/ts/class/driversLicenses";
import ItemValue from "@/assets/ts/class/itemValue";
import Language from "@/assets/ts/class/language";
import Education from "@/assets/ts/class/education";
import Experience from "@/assets/ts/class/experience";
import Skill from "@/assets/ts/class/skill";

// Inherits DualInputValue
import DualInputValue from "@/assets/ts/class/inputvalue/dualInputValue";
import Quality from "@/assets/ts/class/inputvalue/quality";
import IntroQuestion1 from "@/assets/ts/class/inputvalue/introQuestion1";
import IntroQuestion2 from "@/assets/ts/class/inputvalue/introQuestion2";
import IntroQuestion3 from "@/assets/ts/class/inputvalue/introQuestion3";
import Study from "@/assets/ts/class/inputvalue/study";
import Competency from "@/assets/ts/class/inputvalue/competency";
import Interests from "@/assets/ts/class/inputvalue/interests";
import Certificate from "@/assets/ts/class/inputvalue/certificate";
import ExperienceTitle from "@/assets/ts/class/inputvalue/experienceTitle";
import ExperienceBranch from "@/assets/ts/class/inputvalue/experienceBranch";
import ExperienceWorkDescription from "@/assets/ts/class/inputvalue/experienceWorkDescription";
import ExperienceWorkActivities from "@/assets/ts/class/inputvalue/experienceWorkActivities";
// Create a new database instance.
const database = new VuexORM.Database();

// Register Models to the database.
database.register(Resume);
database.register(DriversLicense);
database.register(Language);
database.register(Education);
database.register(ItemValue);
database.register(Skill);
database.register(Experience);

// Inherits DualInputValue
database.register(DualInputValue);
database.register(Quality);
database.register(IntroQuestion1);
database.register(IntroQuestion2);
database.register(IntroQuestion3);
database.register(Study);
database.register(Competency);
database.register(Interests);
database.register(Certificate);
database.register(ExperienceTitle);
database.register(ExperienceBranch);
database.register(ExperienceWorkDescription);
database.register(ExperienceWorkActivities);

export { VuexORM, database };
