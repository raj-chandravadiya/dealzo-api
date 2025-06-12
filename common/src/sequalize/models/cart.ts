import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { ProductVarientModel } from '../models/product-varient';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';

export type CartCreateModel = {
  product_varient_id: number;
  quantity: number;
  buyer_id: number;
  added_at: Date;
  modified_at: Date;
  is_deleted: boolean;
};

export type CartAssociationModel = {
  buyer: BuyerModel;
  product_variant: ProductVarientModel;
};

export type CartUpdateModel = Partial<CartCreateModel>;

export type CartUnionModel = DatabasePrimaryKey & CartCreateModel & CartAssociationModel;

export type CartModel = CartUnionModel & Model<CartUnionModel, CartCreateModel>;

export type CartModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CartModel;
};

export const CartModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_varient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product_varient',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buyer',
      key: 'id'
    }
  },
  added_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  modified_at: {
    type: DataTypes.DATE
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
};

export const CartDefineModel = sequelize.define(
  'cart',
  {
    ...CartModelAttributes
  },
  {
    tableName: 'cart',
    timestamps: false
  }
) as CartModelStatic;
