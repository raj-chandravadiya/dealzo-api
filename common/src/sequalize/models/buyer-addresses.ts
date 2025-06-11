import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';
import type { LookupDetailsModel } from './lookup-details';

export type BuyerAddressesCreateModel = {
  buyer_id: number;
  line1: string;
  line2: string;
  landmark: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  address_type_id: number;
  is_default: boolean;
};

export type BuyerAddressesAssociationModel = {
  buyer: BuyerModel;
  lookup_details: LookupDetailsModel;
};

export type BuyerAddressesUpdateModel = Partial<BuyerAddressesCreateModel>;

export type BuyerAddressesUnionModel = DatabasePrimaryKey &
  BuyerAddressesCreateModel &
  BuyerAddressesAssociationModel;

export type BuyerAddressesModel = BuyerAddressesUnionModel &
  Model<BuyerAddressesUnionModel, BuyerAddressesCreateModel>;

export const BuyerAddressesModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buyer',
      key: 'id'
    }
  },
  line1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  line2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  landmark: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
};

export type BuyerAddressesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BuyerAddressesModel;
};

export const BuyerAddressesDefineModel = sequelize.define(
  'buyer_addresses',
  {
    ...BuyerAddressesModelAttributes
  },
  {
    tableName: 'buyer_addresses',
    timestamps: false
  }
) as BuyerAddressesModelStatic;
