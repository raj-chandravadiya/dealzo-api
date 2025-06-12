import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { OrderModel } from './orders';
import type { ProductVarientModel } from './product-varient';

export type OrderItemCreateModel = {
  order_id: number;
  product_varient_id: number;
  quantity: number;
  price: number;
};

export type OrderItemAssociationModel = {
  order: OrderModel;
  product_varient: ProductVarientModel;
};

export type OrderItemUpdateModel = Partial<OrderItemCreateModel>;

export type OrderItemUnionModel = DatabasePrimaryKey &
  OrderItemCreateModel &
  OrderItemAssociationModel;

export type OrderItemModel = OrderItemUnionModel & Model<OrderItemUnionModel, OrderItemCreateModel>;

export type OrderItemModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): OrderItemModel;
};

export const OrderItemModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'order',
      key: 'id'
    }
  },
  product_varient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product_varient',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
};

export const OrderItemDefineModel = sequelize.define(
  'order_item',
  {
    ...OrderItemModelAttributes
  },
  {
    tableName: 'order_item',
    timestamps: false
  }
) as OrderItemModelStatic;
