import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { ProductVarientModel } from './product-varient';

export type ProductImageCreateModel = {
  product_varient_id: number;
  image_url: string;
  is_default: boolean;
  created_at: Date;
  modified_at?: Date;
};

export type ProductImageUpdateModel = Partial<ProductImageCreateModel>;

export type ProductImageAssociationModel = {
  product_variant: ProductVarientModel;
};

export type ProductImageUnionModel = DatabasePrimaryKey &
  ProductImageCreateModel &
  ProductImageAssociationModel;

export type ProductImageModel = ProductImageUnionModel &
  Model<ProductImageUnionModel, ProductImageCreateModel>;

export const ProductImageModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_varient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product_varient',
      key: 'id'
    }
  },
  image_url: {
    type: DataTypes.STRING(512),
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

export type ProductImageModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductImageModel;
};

export const ProductImageDefineModel = sequelize.define(
  'product_images',
  {
    ...ProductImageModelAttributes
  },
  {
    tableName: 'product_images',
    timestamps: false
  }
) as ProductImageModelStatic;
