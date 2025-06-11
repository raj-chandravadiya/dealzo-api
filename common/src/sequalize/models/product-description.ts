import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { ProductModel } from './product';

export type ProductDescriptionCreateModel = {
  product_id: number;
  description: string;
  created_at: Date;
  modified_at?: Date;
};

export type ProductDescriptionUpdateModel = Partial<ProductDescriptionCreateModel>;

export type ProductDescriptionAssociationModel = {
  product: ProductModel;
};

export type ProductDescriptionUnionModel = DatabasePrimaryKey &
  ProductDescriptionCreateModel &
  ProductDescriptionAssociationModel;

export type ProductDescriptionModel = ProductDescriptionUnionModel &
  Model<ProductDescriptionUnionModel, ProductDescriptionCreateModel>;

export const ProductDescriptionModelAttributes: ModelAttributes = {
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
  description: {
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

export type ProductDescriptionModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductDescriptionModel;
};

export const ProductDescriptionDefineModel = sequelize.define(
  'product_descriptions',
  {
    ...ProductDescriptionModelAttributes
  },
  {
    tableName: 'product_descriptions',
    timestamps: false
  }
) as ProductDescriptionModelStatic;
