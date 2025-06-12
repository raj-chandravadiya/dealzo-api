import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';
import type { UserModel } from './user';

export type SellerReviewCreateModel = {
  seller_id: number;
  buyer_id: number;
  rating: number;
  comment: string;
  created_at: Date;
};

export type SellerReviewAssociationModel = {
  user: UserModel;
  buyer: BuyerModel;
};

export type SellerReviewUpdateModel = Partial<SellerReviewCreateModel>;

export type SellerReviewUnionModel = DatabasePrimaryKey &
  SellerReviewCreateModel &
  SellerReviewAssociationModel;

export type SellerReviewModel = SellerReviewUnionModel &
  Model<SellerReviewUnionModel, SellerReviewCreateModel>;

export const SellerReviewModelAttributes: ModelAttributes = {
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
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buyer',
      key: 'id'
    }
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Comment: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE
  }
};

export type SellerReviewModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SellerReviewModel;
};

export const SellerReviewDefineModel = sequelize.define(
  'seller-review',
  {
    ...SellerReviewModelAttributes
  },
  {
    tableName: 'seller-review',
    timestamps: false
  }
) as SellerReviewModelStatic;
