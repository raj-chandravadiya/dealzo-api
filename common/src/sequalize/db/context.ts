import type { Sequelize } from 'sequelize';
import { AdminDefineModel } from '../models/admin';
import type { AdminModelStatic } from '../models/admin';
import { LookupDetailsDefineModel } from '../models/lookup-details';
import type { LookupDetailsModelStatic } from '../models/lookup-details';
import { LookupsDefineModel } from '../models/lookups';
import type { LookupsModelStatic } from '../models/lookups';
import { UserDefineModel } from '../models/user';
import type { UserModelStatic } from '../models/user';
import { sequelize } from './config';

export interface DbContext {
  sequelize: Sequelize;
  lookups: LookupsModelStatic;
  lookupDetails: LookupDetailsModelStatic;
  user: UserModelStatic;
  admin: AdminModelStatic;
}

export const db: DbContext = {
  sequelize: sequelize,
  lookups: LookupsDefineModel,
  lookupDetails: LookupDetailsDefineModel,
  user: UserDefineModel,
  admin: AdminDefineModel
};
