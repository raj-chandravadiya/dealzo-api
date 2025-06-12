import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';
import type { LookupDetailsModel } from './lookup-details';
import type { OrderModel } from './orders';

export type PaymentCreateModel = {
  buyer_id: number;
  order_id: number;
  amount: number;
  payment_status_id: number;
  payment_method_id: number;
  paid_at: Date;
  modified_at?: Date;
};

export type PaymentAssociationModel = {
  order: OrderModel;
  buyer: BuyerModel;
  lookup_details: LookupDetailsModel;
};

export type PaymentUpdateModel = Partial<PaymentCreateModel>;

export type PaymentUnionModel = DatabasePrimaryKey & PaymentCreateModel & PaymentAssociationModel;

export type PaymentModel = PaymentUnionModel & Model<PaymentUnionModel, PaymentCreateModel>;

export type PaymentModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PaymentModel;
};

export const PaymentModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buyer',
      key: 'id'
    }
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'order',
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  payment_status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  payment_method_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  paid_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  modified_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
};

export const PaymentDefineModel = sequelize.define(
  'payment',
  {
    ...PaymentModelAttributes
  },
  {
    tableName: 'payment',
    timestamps: false
  }
) as PaymentModelStatic;
