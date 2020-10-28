"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.findById = exports.deleteUser = exports.updateUser = exports.insertUser = exports.users = void 0;
exports.users = [{
        id: 1,
        email: 'mila_sutherland@gmail.com',
        firstName: 'Mila',
        lastName: 'sutherland'
    }, {
        id: 2,
        email: 'sam_decker@gmail.com',
        firstName: 'Sam',
        lastName: 'Decker'
    }, {
        id: 3,
        email: 'amina_morse@gmail.com',
        firstName: 'Amina',
        lastName: 'Morse'
    }];
exports.insertUser = (user) => {
    if (!exports.users.filter(u => u.id === user.id)) {
        throw Error('Invalid User ID');
    }
    exports.users.push(user);
};
exports.updateUser = (user) => {
    if (!user.id) {
        throw Error('User ID required');
    }
    const i = exports.users.indexOf(user);
    exports.users[i] = user;
};
exports.deleteUser = (id) => {
    if (!id) {
        throw Error('User ID required');
    }
    const i = exports.users.findIndex(user => user.id === id);
    exports.users.splice(i, 1);
};
exports.findById = (id) => {
    if (!id) {
        throw Error('User ID required');
    }
    return exports.users.find(user => user.id === id);
};
exports.findAll = () => {
    return exports.users;
};
