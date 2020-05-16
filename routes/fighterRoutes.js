const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.post('/', createFighterValid, (req, res, next) => {
    try {
        const validationErrors = req.validationErrors;
        if (validationErrors) {
            res.status(400);
            res.err = validationErrors;
        } else {
            const newFighterData = req.body;
            const createdFighter = FighterService.createNew(newFighterData);
            res.data = createdFighter;
        }
    } catch (err) {
        res.status(500);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);



router.put('/:id', updateFighterValid, (req, res, next) => {
    try {
        const validationErrors = req.validationErrors;
        if (validationErrors) {
            res.status(400);
            res.err = validationErrors;
        } else {
            const { id } = req.params;
            const dataToUpdate = req.body;
            const updatedFighter = FighterService.update(id, dataToUpdate);
            res.data = updatedFighter;
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
        const allFighters = FighterService.getAll();
        res.data = allFighters;
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
        const fighter = FighterService.search(searchQuery);
        res.data = fighter;
    } catch (err) {
        res.status(404);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);



module.exports = router;