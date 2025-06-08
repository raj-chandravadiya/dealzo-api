import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import { DatabasePrimaryKey } from '../types';
import { LookupsModel } from './lookups';

export type LookupDetailsCreateModel = {
  code: string;
  name: string;
  lookup_id: number;
  description: string;
  display_order: string;
};

export type LookupDetailsAssociationModel = {
  lookups: LookupsModel;
};

export type LookupDetailsUpdateModel = Partial<LookupDetailsCreateModel>;

export type LookupDetailsUnionModel = DatabasePrimaryKey &
  LookupDetailsCreateModel &
  LookupDetailsAssociationModel;

export type LookupDetailsModel = LookupDetailsUnionModel &
  Model<LookupDetailsUnionModel, LookupDetailsCreateModel>;

export const LookupDetailsModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lookup_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'lookups',
      key: 'id'
    },
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  display_order: {
    type: DataTypes.INTEGER
  }
};

export type LookupDetailsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): LookupDetailsModel;
};

export const LookupDetailsDefineModel = sequelize.define(
  'lookup_details',
  {
    ...LookupDetailsModelAttributes
  },
  {
    tableName: 'lookup_details',
    timestamps: false
  }
) as LookupDetailsModelStatic;
