'use strict';

import type { Seeder } from "../umzug.js";

const seedUsers = [
  { id: 1, name: 'Artmann', ra: '222222', email: 'arttest@gmail.com', createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: 'Duck', ra: '222267', email: 'ducktest@gmail.com', createdAt: new Date(), updatedAt: new Date() }
];

export const up: Seeder = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().bulkInsert('Users', seedUsers);
};

export const down: Seeder = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().bulkDelete('Users', { id: seedUsers.map(u => u.id) });
};