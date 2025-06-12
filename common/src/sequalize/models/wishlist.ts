import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';
import type { ProductVarientModel } from './product-varient';

export type WishlistCreateModel = {
  buyer_id: number;
  product_varient_id: number;
  added_at: Date;
  is_deleted: boolean;
};

export type WishlistAssociationModel = {
  buyer: BuyerModel;
  product_variant: ProductVarientModel;
};

export type WishlistUpdateModel = Partial<WishlistCreateModel>;

export type WishlistUnionModel = DatabasePrimaryKey &
  WishlistCreateModel &
  WishlistAssociationModel;

export type WishlistModel = WishlistUnionModel & Model<WishlistUnionModel, WishlistCreateModel>;

export type WishlistModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): WishlistModel;
};

export const WishlistModelAttributes: ModelAttributes = {
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
  product_varient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product_variant',
      key: 'id'
    }
  },
  added_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
};

export const WishlistDefineModel = sequelize.define(
  'wishlist',
  {
    ...WishlistModelAttributes
  },
  {
    tableName: 'wishlist',
    timestamps: false
  }
) as WishlistModelStatic;
