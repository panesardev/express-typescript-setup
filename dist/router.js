"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./users");
const router = express_1.default.Router();
router.get('/', (request, response, next) => {
    response.status(200).json({
        users: users_1.findAll()
    });
});
router.get('/:id', (request, response, next) => {
    const id = Number(request.params.id);
    response.status(200).json({
        user: users_1.findById(id)
    });
});
router.post('/', (request, response, next) => {
    const userBody = request.body;
    users_1.insertUser(userBody);
    response.status(200).json({
        message: 'success'
    });
});
router.put('/', (request, response, next) => {
    const userBody = request.body;
    users_1.insertUser(userBody);
    response.status(200).json({
        message: 'success'
    });
});
router.delete('/:id', (request, response, next) => {
    const id = Number(request.params.id);
    users_1.deleteUser(id);
    response.status(200).json({
        message: 'success'
    });
});
exports.default = router;
