import { Umzug, SequelizeStorage } from 'umzug';
import { Sequelize } from 'sequelize';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/development.sqlite'
});

export const migrator = new Umzug({
    migrations: {
        glob: ['migrations/*.ts', { cwd: __dirname}],
    },
    context: sequelize,
    storage: new SequelizeStorage({sequelize}),
    logger: console,
});

export type Migration = typeof migrator._types.migration;

export const seeder = new Umzug({
    migrations: {
        glob: ['seeders/*.ts', { cwd: __dirname }],
    },
    context: sequelize,
    storage: new SequelizeStorage({
        sequelize,
        modelName: 'seeder_meta',
    }),
    logger: console,
});

export type Seeder = typeof seeder._types.migration;