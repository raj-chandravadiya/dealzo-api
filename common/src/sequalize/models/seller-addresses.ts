import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { LookupDetailsModel } from './lookup-details';
import type { SellerModel } from './seller';

export type SellerAddressesCreateModel = {
  seller_id: number;
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

export type SellerAddressesAssociationModel = {
  seller: SellerModel;
  lookup_details: LookupDetailsModel;
};

export type SellerAddressesUpdateModel = Partial<SellerAddressesCreateModel>;

export type SellerAddressesUnionModel = DatabasePrimaryKey &
  SellerAddressesCreateModel &
  SellerAddressesAssociationModel;

export type SellerAddressesModel = SellerAddressesUnionModel &
  Model<SellerAddressesUnionModel, SellerAddressesCreateModel>;

export const SellerAddressesModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'seller',
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

export type SellerAddressesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SellerAddressesModel;
};

export const SellerAddressesDefineModel = sequelize.define(
  'seller_addresses',
  {
    ...SellerAddressesModelAttributes
  },
  {
    tableName: 'seller_addresses',
    timestamps: false
  }
) as SellerAddressesModelStatic;
