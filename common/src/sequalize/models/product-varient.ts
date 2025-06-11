import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { LookupDetailsModel } from './lookup-details';
import type { ProductModel } from './product';

export type ProductVarientCreateModel = {
  product_id: number;
  product_size_id: number;
  product_color_id: number;
  price: number;
  available_quantity: number;
  created_at: Date;
  modified_at?: Date;
};

export type ProductVarientAssociationModel = {
  product: ProductModel;
  size: LookupDetailsModel;
  color: LookupDetailsModel;
};

export type ProductVarientUpdateModel = Partial<ProductVarientCreateModel>;

export type ProductVarientUnionModel = DatabasePrimaryKey &
  ProductVarientCreateModel &
  ProductVarientAssociationModel;

export type ProductVarientModel = ProductVarientUnionModel &
  Model<ProductVarientUnionModel, ProductVarientCreateModel>;

export const ProductVarientModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product',
      key: 'id'
    }
  },
  product_size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  product_color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  available_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  modified_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
};

export type ProductVarientModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductVarientModel;
};

export const ProductVarientDefineModel = sequelize.define(
  'product_varient',
  {
    ...ProductVarientModelAttributes
  },
  {
    tableName: 'product_varient',
    timestamps: false
  }
) as ProductVarientModelStatic;
