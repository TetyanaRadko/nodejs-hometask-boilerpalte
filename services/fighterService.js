const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    createNew(data) {
        return FighterRepository.create(data);
    }

    getAll() {
        return FighterRepository.getAll();
    }

    update(id, dataToUpdate) {
        return FighterRepository.update(id, dataToUpdate)
    }

    delete(id) {
        return FighterRepository.delete(id);
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new FighterService();