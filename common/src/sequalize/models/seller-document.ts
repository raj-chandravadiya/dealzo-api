import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { LookupDetailsModel } from './lookup-details';
import type { SellerModel } from './seller';

export type SellerDocumentCreateModel = {
  seller_id: number;
  document_type_id: number;
  document_url: string;
  document_status_id: number;
  uploaded_at: Date;
  verified_at: Date;
};

export type SellerDocumentAssociationModel = {
  seller: SellerModel;
  lookup_details: LookupDetailsModel;
};

export type SellerDocumentUpdateModel = Partial<SellerDocumentCreateModel>;

export type SellerDocumentsUnionModel = DatabasePrimaryKey &
  SellerDocumentCreateModel &
  SellerDocumentAssociationModel;

export type SellerDocumentModel = SellerDocumentsUnionModel &
  Model<SellerDocumentsUnionModel, SellerDocumentCreateModel>;

export const SellerDocumentModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'seller',
      key: 'id'
    }
  },
  document_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  document_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  document_status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  uploaded_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  verified_at: {
    type: DataTypes.DATE
  }
};

export type SellerDocumentModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SellerDocumentModel;
};

export const SellerDocumentDefineModel = sequelize.define(
  'seller_document',
  {
    ...SellerDocumentModelAttributes
  },
  {
    tableName: 'seller_document',
    timestamps: false
  }
) as SellerDocumentModelStatic;
