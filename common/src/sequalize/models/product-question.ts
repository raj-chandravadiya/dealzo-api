import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';
import type { ProductModel } from './product';
import type { SellerModel } from './seller';

export type ProductQuestionCreateModel = {
  product_id: number;
  buyer_id: number;
  question: string;
  is_answered: boolean;
  answer?: string;
  answered_by_id?: number;
  created_at: Date;
  modified_at?: Date;
};

export type ProductQuestionUpdateModel = Partial<ProductQuestionCreateModel>;

export type ProductQuestionAssociationModel = {
  product: ProductModel;
  buyer: BuyerModel;
  seller: SellerModel;
};

export type ProductQuestionUnionModel = DatabasePrimaryKey &
  ProductQuestionCreateModel &
  ProductQuestionAssociationModel;

export type ProductQuestionModel = ProductQuestionUnionModel &
  Model<ProductQuestionUnionModel, ProductQuestionCreateModel>;

export const ProductQuestionModelAttributes: ModelAttributes = {
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
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buyer',
      key: 'id'
    }
  },
  question: {
    type: DataTypes.STRING(512),
    allowNull: false
  },
  is_answered: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  answer: {
    type: DataTypes.STRING(1024),
    allowNull: true
  },
  answered_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'seller',
      key: 'id'
    }
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

export type ProductQuestionModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductQuestionModel;
};

export const ProductQuestionDefineModel = sequelize.define(
  'product_question',
  {
    ...ProductQuestionModelAttributes
  },
  {
    tableName: 'product_question',
    timestamps: false
  }
) as ProductQuestionModelStatic;
