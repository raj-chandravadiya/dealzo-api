import { LookupDetailsDefineModel } from './models/lookup-details';
import { LookupsDefineModel } from './models/lookups';

LookupDetailsDefineModel.belongsTo(LookupsDefineModel, {
  foreignKey: 'lookup_id'
});

LookupsDefineModel.hasMany(LookupDetailsDefineModel, {
  foreignKey: 'lookup_id'
});
