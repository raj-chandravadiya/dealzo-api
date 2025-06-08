import { Sequelize } from 'sequelize';
import { LookupsDefineModel, LookupsModelStatic } from '../models/lookups';
import { LookupDetailsDefineModel, LookupDetailsModelStatic } from '../models/lookup-details';
import { sequelize } from './config';

export interface DbContext {
  sequelize: Sequelize;
  lookups: LookupsModelStatic;
  lookupDetails: LookupDetailsModelStatic;
}

export const db: DbContext = {
  sequelize: sequelize,
  lookups: LookupsDefineModel,
  lookupDetails: LookupDetailsDefineModel
};
