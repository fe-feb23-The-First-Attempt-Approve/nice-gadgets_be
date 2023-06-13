"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const phones_1 = require("../controllers/phones");
exports.router = express_1.default.Router();
exports.router.get('/', phones_1.getAll);
exports.router.get('/:phoneId', phones_1.getOne);