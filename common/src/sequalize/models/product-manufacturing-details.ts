import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { ProductModel } from './product';

export type ProductManufacturingDetailsCreateModel = {
  product_id: number;
  manufacturer: string;
  packer: string;
  importer?: string;
  created_at: Date;
  modified_at?: Date;
};

export type ProductManufacturingDetailsAssociationModel = {
  product: ProductModel;
};

export type ProductManufacturingDetailsUpdateModel =
  Partial<ProductManufacturingDetailsCreateModel>;

export type ProductManufacturingDetailsUnionModel = DatabasePrimaryKey &
  ProductManufacturingDetailsCreateModel &
  ProductManufacturingDetailsAssociationModel;

export type ProductManufacturingDetailsModel = ProductManufacturingDetailsUnionModel &
  Model<ProductManufacturingDetailsUnionModel, ProductManufacturingDetailsCreateModel>;

export const ProductManufacturingDetailsModelAttributes: ModelAttributes = {
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
  manufacturer: {
    type: DataTypes.STRING(1023),
    allowNull: false
  },
  packer: {
    type: DataTypes.STRING(1023),
    allowNull: false
  },
  importer: {
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

export type ProductManufacturingDetailsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductManufacturingDetailsModel;
};

export const ProductManufacturingDetailsDefineModel = sequelize.define(
  'product_manufacturing_details',
  {
    ...ProductManufacturingDetailsModelAttributes
  },
  {
    tableName: 'product_manufacturing_details',
    timestamps: false
  }
) as ProductManufacturingDetailsModelStatic;
