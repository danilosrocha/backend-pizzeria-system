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
exports.ListByCategoryController = void 0;
const ListByCategoryService_1 = require("../../services/products/ListByCategoryService");
class ListByCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = (req.query.page || 1);
            const limit = (req.query.limit || 10);
            const skip = (page - 1) * limit;
            const category_id = req.query.category_id;
            const listByCategoryService = new ListByCategoryService_1.ListByCategoryService();
            const productsByCategory = yield listByCategoryService.execute({ category_id, skip, limit });
            return res.json(productsByCategory);
        });
    }
}
exports.ListByCategoryController = ListByCategoryController;
