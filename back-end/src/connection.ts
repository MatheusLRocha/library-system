import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/development.sqlite'
});

try {
    await sequelize.authenticate();
    console.log('Connection successed');
} catch(error) {
    console.error(`Unable to connect: ${error}`);
}

export default sequelize;