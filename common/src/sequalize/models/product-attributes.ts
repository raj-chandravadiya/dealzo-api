import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { ProductModel } from './product';

export type ProductAttributeCreateModel = {
  product_id: number;
  attribute_name?: string;
  attribute_value?: string;
  created_at: Date;
  modified_at?: Date;
};

export type ProductAttributeUpdateModel = Partial<ProductAttributeCreateModel>;

export type ProductAttributeAssociationModel = {
  product: ProductModel;
};

export type ProductAttributeUnionModel = DatabasePrimaryKey &
  ProductAttributeCreateModel &
  ProductAttributeAssociationModel;

export type ProductAttributeModel = ProductAttributeUnionModel &
  Model<ProductAttributeUnionModel, ProductAttributeCreateModel>;

export const ProductAttributeModelAttributes: ModelAttributes = {
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
      model: 'products',
      key: 'id'
    }
  },
  attribute_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  attribute_value: {
    type: DataTypes.STRING(1023),
    allowNull: true
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

export type ProductAttributeModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductAttributeModel;
};

export const ProductAttributeDefineModel = sequelize.define(
  'product_attribute',
  {
    ...ProductAttributeModelAttributes
  },
  {
    tableName: 'product_attributes',
    timestamps: false
  }
) as ProductAttributeModelStatic;
