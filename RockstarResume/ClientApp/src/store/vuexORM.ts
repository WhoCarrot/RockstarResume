import VuexORM from '@vuex-orm/core'

import Resume from '@/assets/ts/class/resume'

// Create a new database instance.
const database = new VuexORM.Database()

// Register Models to the database.
database.register(Resume)

export { VuexORM, database}