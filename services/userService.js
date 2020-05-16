const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    createNew(data) {
        return UserRepository.create(data);
    }

    getAll() {
        return UserRepository.getAll();
    }

    update(id, dataToUpdate) {
        return UserRepository.update(id, dataToUpdate)
    }

    delete(id) {
        return UserRepository.delete(id);
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();