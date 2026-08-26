import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/production.sqlite'
});

const User = sequelize.define(
    'User',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ra: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    }
)



try {
    await sequelize.authenticate();
    console.log('Connection successed');
} catch(error) {
    console.error(`Unable to connect: ${error}`);
}

export default sequelize;