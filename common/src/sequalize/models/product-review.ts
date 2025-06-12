import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';
import type { ProductVarientModel } from './product-varient';

export type ProductReviewCreateModel = {
  product_varient_id: number;
  buyer_id: number;
  rating: number;
  comment?: string;
  created_at: Date;
  modified_at?: Date;
};

export type ProductReviewAssociationModel = {
  buyer: BuyerModel;
  product_varient: ProductVarientModel;
};

export type ProductReviewUpdateModel = Partial<ProductReviewCreateModel>;

export type ProductReviewUnionModel = DatabasePrimaryKey &
  ProductReviewCreateModel &
  ProductReviewAssociationModel;

export type ProductReviewModel = ProductReviewUnionModel &
  Model<ProductReviewUnionModel, ProductReviewCreateModel>;

export const ProductReviewModelAttributes: ModelAttributes = {
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
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buyer',
      key: 'id'
    }
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
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

export type ProductReviewModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductReviewModel;
};

export const ProductReviewDefineModel = sequelize.define(
  'product_review',
  {
    ...ProductReviewModelAttributes
  },
  {
    tableName: 'product_review',
    timestamps: false
  }
) as ProductReviewModelStatic;
