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
exports.CreateOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateOrderService {
    execute({ table, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!table) {
                throw new Error("Order needs fields filled in to create!!");
            }
            const orderAlreadyExists = yield prisma_1.default.order.findFirst({
                where: {
                    table,
                }
            });
            if (orderAlreadyExists) {
                throw new Error("Order Already Exists!!");
            }
            const order = yield prisma_1.default.order.create({
                data: {
                    table,
                    name: name
                }, select: {
                    id: true,
                    table: true,
                    status: true,
                    draft: true,
                    name: true
                }
            });
            return order;
        });
    }
}
exports.CreateOrderService = CreateOrderService;
