import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('e-commerce', 'postgres', 'new_secure_password', {
  dialect: 'postgres',
  host: 'localhost',
  logging: false,
  port: 5432
});

export { sequelize };
