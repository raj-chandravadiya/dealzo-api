import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';
import type { LookupDetailsModel } from './lookup-details';
import type  { UserModel } from './user'

export type BuyerCreateModel = {
    user_id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    dob: Date,
    user_status_id: number,
    created_at: Date,
    modified_at: Date
}

export type BuyerAssociationModel = {
    user: UserModel;
    lookup_details: LookupDetailsModel;
}

export type BuyerUpdateModel = Partial<BuyerCreateModel>

export type BuyerUnionModel = DatabasePrimaryKey & BuyerCreateModel & BuyerAssociationModel

export type BuyerModel = BuyerUnionModel & Model<BuyerUnionModel, BuyerCreateModel>

export const BuyerModelAttributes: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
        
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob:{
        type: DataTypes.DATE,
    },
    user_status_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'lookup_details',
            key: 'id'
        }
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    modified_at:{
        type: DataTypes.DATE,
    }
}

export type BuyerModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BuyerModel;
};

export const BuyerDefineModel = sequelize.define(
  'buyer',
  {
    ...BuyerModelAttributes
  },
  {
    tableName: 'buyer',
    timestamps: false
  }
) as BuyerModelStatic;
