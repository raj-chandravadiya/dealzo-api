import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { ProductReviewModel } from './product-review';

export type ProductReviewImagesCreateModel = {
  product_review_id: number;
  image_url: number;
  created_at: Date;
  modified_at?: Date;
};

export type ProductReviewImagesAssociationModel = {
  product_review: ProductReviewModel;
};

export type ProductReviewImagesUpdateModel = Partial<ProductReviewImagesCreateModel>;

export type ProductReviewImagesUnionModel = DatabasePrimaryKey &
  ProductReviewImagesCreateModel &
  ProductReviewImagesAssociationModel;

export type ProductReviewImagesModel = ProductReviewImagesUnionModel &
  Model<ProductReviewImagesUnionModel, ProductReviewImagesCreateModel>;

export const ProductReviewImagesModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_review_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product_review',
      key: 'id'
    }
  },
  image_url: {
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

export type ProductReviewImagesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductReviewImagesModel;
};

export const ProductReviewImagesDefineModel = sequelize.define(
  'product_review_images',
  {
    ...ProductReviewImagesModelAttributes
  },
  {
    tableName: 'product_review_images',
    timestamps: false
  }
) as ProductReviewImagesModelStatic;
