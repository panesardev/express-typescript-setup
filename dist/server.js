"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const server = express_1.default();
const PORT = 5000 || process.env.PORT;
server.use('/users', router_1.default);
server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
