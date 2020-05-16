const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    
    validate(req);
    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    
    validate(req);

    next();
}


function validate(req) {

    const body = req.body;
    const { firstName, lastName, email = '', password, phoneNumber = ''} = body;
    let validationErrors = null;

    if (!firstName) {
        validationErrors = {
            message: 'firstName is missing'
        };
    }

    if (!lastName) {
        validationErrors = {
            message: 'lastName is missing'
        };
    }

    if (!email) {
        validationErrors = {
            message: 'email is missing'
        };
    }

    if (!password) {
        validationErrors = {
            message: 'password is missing'
        };
    }

    if (!phoneNumber) {
        validationErrors = {
            message: 'phoneNumber is missing'
        };
    }

    if (body.hasOwnProperty('id')) {
        validationErrors = {
            message: 'Passing ID not allowed'
        };
    }

    const isEmailValid = email.includes('@gmail.com');
    if (!isEmailValid) {
        validationErrors = {
            message: 'Only @gmail.com allowed as email'
        };
    }

    const isPhoneNumberValid = phoneNumber.startsWith('+380') && phoneNumber.length === 13;
    if (!isPhoneNumberValid) {
        validationErrors = {
            message: 'phoneNumber should starts with +380 and has 13 symbols'
        };
    }

    req.validationErrors = validationErrors;
    // allowed fields
    req.body = { firstName, lastName, email, password, phoneNumber };

}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;