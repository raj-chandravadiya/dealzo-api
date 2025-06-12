import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { BuyerModel } from './buyer';
import type { BuyerAddressesModel } from './buyer-addresses';
import type { LookupDetailsModel } from './lookup-details';

export type OrderCreateModel = {
  buyer_id: number;
  buyer_address_id: number;
  order_status_id: number;
  total_amout: number;
  placed_at: Date;
  delivered_at?: Date;
};

export type OrderAssociationModel = {
  buyer: BuyerModel;
  buyer_address: BuyerAddressesModel;
  lookup_details: LookupDetailsModel;
};

export type OrderUpdateModel = Partial<OrderCreateModel>;

export type OrderUnionModel = DatabasePrimaryKey & OrderCreateModel & OrderAssociationModel;

export type OrderModel = OrderUnionModel & Model<OrderUnionModel, OrderCreateModel>;

export type OrderModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): OrderModel;
};

export const OrderModelAttributes: ModelAttributes = {
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
  buyer_address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buyer_addresses',
      key: 'id'
    }
  },
  order_status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  total_amout: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  placed_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  delivered_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
};

export const OrderDefineModel = sequelize.define(
  'order',
  {
    ...OrderModelAttributes
  },
  {
    tableName: 'order',
    timestamps: false
  }
) as OrderModelStatic;
