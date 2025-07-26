import app from './app';
import { db, sequelize } from 'common';

(async () => {
    try {
        await sequelize.connectionManager.releaseConnection(db.sequelize);

        app.listen(4001, () => {
            console.log(`authorizer is running on http://localhost:4001`);
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})();
