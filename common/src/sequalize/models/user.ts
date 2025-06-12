import type { BuildOptions, Model, ModelAttributes } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';
import type { DatabasePrimaryKey } from '../types';

export type UserCreateModel = {
  email: string;
  password: string;
  phone: string;
  account_type_id: number;
  user_status_id: number;
  created_at: Date;
  modified_at: Date;
};

export type UserUpdateModel = Partial<UserCreateModel>;

export type UserUnionModel = DatabasePrimaryKey & UserCreateModel;

export type UserModel = UserUnionModel & Model<UserUnionModel, UserCreateModel>;

export const UserModelAttributes: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  account_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  user_status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'lookup_details',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  modified_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
};

export type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

export const UserDefineModel = sequelize.define(
  'user',
  {
    ...UserModelAttributes
  },
  {
    tableName: 'user',
    timestamps: false
  }
) as UserModelStatic;
