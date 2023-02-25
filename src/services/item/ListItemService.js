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
exports.ListItemByOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListItemByOrderService {
    execute({ order_id, limit, skip }) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemsOrder = yield prisma_1.default.item.findMany({
                where: {
                    order_id: order_id
                },
                select: {
                    id: true,
                    amount: true,
                    order: {
                        select: {
                            id: true,
                            table: true,
                            name: true,
                            status: true,
                            draft: true,
                        }
                    },
                    product: {
                        select: {
                            id: true,
                            name: true,
                            price: true,
                            description: true,
                        }
                    }
                }
            });
            return itemsOrder;
        });
    }
}
exports.ListItemByOrderService = ListItemByOrderService;
