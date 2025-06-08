import { Sequelize } from 'sequelize';
import { AdminDefineModel, AdminModelStatic } from '../models/admin';
import { LookupDetailsDefineModel, LookupDetailsModelStatic } from '../models/lookup-details';
import { LookupsDefineModel, LookupsModelStatic } from '../models/lookups';
import { UserDefineModel, UserModelStatic } from '../models/user';
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
