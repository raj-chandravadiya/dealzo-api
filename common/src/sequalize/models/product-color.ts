import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { ProductModel } from './product';

export type ProductColorCreateModel = {
  product_id: number;
  code: string;
  value: string;
  color_code: string;
  is_default: boolean;
  created_at: Date;
  modified_at?: Date;
};

export type ProductColorUpdateModel = Partial<ProductColorCreateModel>;

export type ProductColorAssociationModel = {
  product: ProductModel;
};

export type ProductColorUnionModel = DatabasePrimaryKey &
  ProductColorCreateModel &
  ProductColorAssociationModel;

export type ProductColorModel = ProductColorUnionModel &
  Model<ProductColorUnionModel, ProductColorCreateModel>;

export const ProductColorModelAttributes: ModelAttributes = {
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
  code: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  value: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  color_code: {
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

export type ProductColorModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductColorModel;
};

export const ProductColorDefineModel = sequelize.define(
  'product_color',
  {
    ...ProductColorModelAttributes
  },
  {
    tableName: 'product_color',
    timestamps: false
  }
) as ProductColorModelStatic;
