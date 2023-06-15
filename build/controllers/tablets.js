"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getRange = exports.getMinMaxPrices = exports.getHot = exports.getAllCount = exports.getAll = void 0;
const tablets_1 = require("../services/tablets");
const SortType_1 = require("../types.ts/SortType");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tablets = yield (0, tablets_1.findAll)();
    res.send(tablets);
});
exports.getAll = getAll;
const getAllCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tabletsCount = (yield (0, tablets_1.findAll)()).length;
    res.send({ tabletsCount });
});
exports.getAllCount = getAllCount;
const getHot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hotTablets = yield (0, tablets_1.findHot)();
    res.send(hotTablets);
});
exports.getHot = getHot;
const getMinMaxPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [min, max] = yield (0, tablets_1.findMinMaxPrices)();
    res.send({ min, max });
});
exports.getMinMaxPrices = getMinMaxPrices;
const getRange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [min, max] = yield (0, tablets_1.findMinMaxPrices)();
    const { page = 1, perPage = 8, sort = SortType_1.SortType.New, maxPrice = max, minPrice = min, } = req.query;
    const tabletsInfo = yield (0, tablets_1.findRange)(Number(page), Number(perPage), sort, Number(maxPrice), Number(minPrice));
    res.send(tabletsInfo);
});
exports.getRange = getRange;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tabletId } = req.params;
    const foundTablet = yield (0, tablets_1.findById)(tabletId);
    if (!foundTablet) {
        res.sendStatus(404);
        return;
    }
    res.send(foundTablet);
});
exports.getOne = getOne;
