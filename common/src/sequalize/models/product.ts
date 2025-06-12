import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { LookupDetailsModel } from './lookup-details';
import type { SellerModel } from './seller';

export type ProductCreateModel = {
  seller_id: number;
  category_id: number;
  name: string;
  generic_name: string;
  item_weight: string;
  item_dimensions: string;
  country_of_origin: string;
  base_price: number;
  is_active: boolean;
  created_at: Date;
  modified_at?: Date;
};

export type ProductAssociationModel = {
  seller: SellerModel;
  lookup_details: LookupDetailsModel;
};

export type ProductUpdateModel = Partial<ProductCreateModel>;

export type ProductUnionModel = DatabasePrimaryKey & ProductCreateModel & ProductAssociationModel;

export type ProductModel = ProductUnionModel & Model<ProductUnionModel, ProductCreateModel>;

export const ProductModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'seller',
      key: 'id'
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  generic_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  item_weight: {
    type: DataTypes.STRING,
    allowNull: false
  },
  item_dimensions: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country_of_origin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  base_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
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

export type ProductModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductModel;
};

export const ProductDefineModel = sequelize.define(
  'product',
  {
    ...ProductModelAttributes
  },
  {
    tableName: 'product',
    timestamps: false
  }
) as ProductModelStatic;
