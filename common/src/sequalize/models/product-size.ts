import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { LookupDetailsModel } from './lookup-details';
import type { ProductModel } from './product';

export type ProductSizeCreateModel = {
  product_id: number;
  size_category_id: number;
  code: string;
  value: string;
  is_default: boolean;
  created_at: Date;
  modified_at?: Date;
};

export type ProductSizeAssociationModel = {
  product: ProductModel;
  lookup_details: LookupDetailsModel;
};

export type ProductSizeUpdateModel = Partial<ProductSizeCreateModel>;

export type ProductSizeUnionModel = DatabasePrimaryKey &
  ProductSizeCreateModel &
  ProductSizeAssociationModel;

export type ProductSizeModel = ProductSizeUnionModel &
  Model<ProductSizeUnionModel, ProductSizeCreateModel>;

export const ProductSizeModelAttributes: ModelAttributes = {
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
  size_category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  code: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  value: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
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

export type ProductSizeModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductSizeModel;
};

export const ProductSizeDefineModel = sequelize.define(
  'product_size',
  {
    ...ProductSizeModelAttributes
  },
  {
    tableName: 'product_size',
    timestamps: false
  }
) as ProductSizeModelStatic;
