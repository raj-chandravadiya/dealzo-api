import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { LookupDetailsModel } from './lookup-details';
import type { UserModel } from './user';

export type SellerCreateModel = {
  user_id: number;
  bussiness_name: string;
  gst_number: string;
  pan_number: string;
  verified: boolean;
  user_status_id: number;
  created_at: Date;
  modified_at: Date;
  verified_by: number;
  verfied_at: Date;
};

export type SellerAssociationModel = {
  user: UserModel;
  lookup_details: LookupDetailsModel;
};

export type SellerUpdateModel = Partial<SellerCreateModel>;

export type SellersUnionModel = DatabasePrimaryKey & SellerCreateModel & SellerAssociationModel;

export type SellerModel = SellersUnionModel & Model<SellersUnionModel, SellerCreateModel>;

export const SellerModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  bussiness_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gst_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pan_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  user_status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  modified_at: {
    type: DataTypes.DATE
  },
  verified_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  verfied_at: {
    type: DataTypes.DATE
  }
};

export type SellerModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SellerModel;
};

export const SellerDefineModel = sequelize.define(
  'seller',
  {
    ...SellerModelAttributes
  },
  {
    tableName: 'seller',
    timestamps: false
  }
) as SellerModelStatic;
