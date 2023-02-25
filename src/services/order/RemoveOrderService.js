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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class RemoveOrderService {
    execute({ order_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!order_id) {
                throw new Error("Enter the table id!");
            }
            const order = yield prisma_1.default.order.findFirst({
                where: {
                    id: order_id
                }
            });
            if (!order) {
                throw new Error("Table does not exist!");
            }
            const delOrder = yield prisma_1.default.order.delete({
                where: {
                    id: order_id
                }
            });
            const message = Object.assign({ message: "Successfully deleted order!" }, delOrder);
            return message;
        });
    }
}
exports.RemoveOrderService = RemoveOrderService;
