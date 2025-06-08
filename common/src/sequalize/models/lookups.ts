import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import { DatabasePrimaryKey } from '../types';

export type LookupsCreateModel = {
  code: string;
  name: string;
};

export type LookupsUpdateModel = Partial<LookupsCreateModel>;

export type LookupsUnionModel = DatabasePrimaryKey & LookupsCreateModel;

export type LookupsModel = LookupsUnionModel & Model<LookupsUnionModel, LookupsCreateModel>;

export const LookupsModelAttributes: ModelAttributes = {
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
  }
};

export type LookupsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): LookupsModel;
};

export const LookupsDefineModel = sequelize.define(
  'lookups',
  {
    ...LookupsModelAttributes
  },
  {
    tableName: 'lookups',
    timestamps: false
  }
) as LookupsModelStatic;
