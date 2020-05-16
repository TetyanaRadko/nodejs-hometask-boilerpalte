const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.post('/', createUserValid, (req, res, next) => {
    try {
        const validationErrors = req.validationErrors;
        if (validationErrors) {
            res.status(400);
            res.err = validationErrors;
        } else {
            const newUserData = req.body;
            const createdUser = UserService.createNew(newUserData);
            res.data = createdUser;
        }
    } catch (err) {
        res.status(500);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);


router.put('/:id', updateUserValid, (req, res, next) => {
    try {
        const validationErrors = req.validationErrors;
        if (validationErrors) {
            res.status(400);
            res.err = validationErrors;
        } else {
            const { id } = req.params;
            const dataToUpdate = req.body;
            const updatedUser = UserService.update(id, dataToUpdate);
            res.data = updatedUser;
        }
    } catch (err) {
        res.status(500);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);


router.get('/', (req, res, next) => {
    try {
        const allUsers = UserService.getAll();
        res.data = allUsers;
    } catch (err) {
        res.status(404);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);


router.get('/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const searchQuery = { id: id };
        const user = UserService.search(searchQuery);
        res.data = user;
    } catch (err) {
        res.status(404);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);


router.delete('/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = UserService.delete(id);
        res.data = deletedUser;
    } catch (err) {
        res.status(500);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);


module.exports = router;