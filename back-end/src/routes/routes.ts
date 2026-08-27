import express from 'express';
import User from '../models/user.js';
import sequelize from '../connection.js';

const router = express.Router();

router.get('/api/users', async (req, res) => {
    const users = await User.findAll();

    await sequelize.authenticate();

    res.json(users);
});

router.get('/api/users/user/:id', async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    res.json(user);
});

router.post('/api/users', async (req, res) => {
    const newUser = await User.create({
        name: req.body.name, 
        ra: req.body.ra,
        email: req.body.email
    });

    res.status(201).json(newUser);
});

router.put('/api/users/user/:id', async (req, res) => {
    await User.update(
        {
            name: req.body.name,
            ra: req.body.ra,
            email: req.body.email
        },
        {
            where: {
                id: req.params.id
            }
        }
    );

    const updateUser = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    res.json(updateUser);
});

router.delete('/api/users/user/:id', async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
});

export default router;