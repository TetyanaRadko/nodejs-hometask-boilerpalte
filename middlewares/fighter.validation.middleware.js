const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    validate(req);
    next();
}

const updateFighterValid = (req, res, next) => {
    
    // TODO: Implement validatior for fighter entity during update

    validate(req);
    next();
}

function validate(req) {

    const body = req.body;
    const { name, health, defense, power } = body;
    let validationErrors = null;

    if (body.hasOwnProperty('id')) {
        validationErrors = {
            message: 'passing ID is not allowed'
        };
    }

    if (!name) {
        validationErrors = {
            message: 'name is missing'
        };
    }

    if (!health) {
        validationErrors = {
            message: 'health is missing'
        };
    }

    if (!defense) {
        validationErrors = {
            message: 'defense is missing'
        };
    }

    if (isNaN(defense)) {
        validationErrors = {
            message: 'defense has to have Number format'
        };
    }

    const def = Number(defense);
    const isValidDefence = def >= 1 && def <= 10;
    if (!isValidDefence) {
        validationErrors = {
            message: 'defence has to be in range 1..10'
        };
    }

    if (!power) {
        validationErrors = {
            message: 'power is missing'
        };
    }

    if (isNaN(power)) {
        validationErrors = {
            message: 'power has to have Number format'
        };
    }

    const pow = Number(power);
    const isValidPower = pow > 0 && pow < 100;
    if (!isValidPower) {
        validationErrors = {
            message: 'power has to be in range 0..100'
        };
    }

    req.validationErrors = validationErrors;
    // allowed fields
    req.body = { name: name, health: health, power: power, defense, defense };

}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;