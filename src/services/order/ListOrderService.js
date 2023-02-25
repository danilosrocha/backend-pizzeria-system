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
exports.ListOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListOrderService {
    execute({ skip, limit, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!status) {
                const orders = yield prisma_1.default.order.findMany({
                    skip: skip,
                    take: Number(limit),
                    where: {
                        status: false,
                        draft: false,
                    },
                    orderBy: {
                        created_at: "desc"
                    },
                    select: {
                        id: true,
                        name: true,
                        table: true,
                        status: true,
                        draft: true
                    }
                });
                return orders;
            }
            const orders = yield prisma_1.default.order.findMany({
                skip: skip,
                take: Number(limit),
                where: {
                    status: false,
                    draft: true,
                },
                select: {
                    id: true,
                    name: true,
                    table: true,
                    status: true,
                    draft: true,
                }
            });
            return orders;
        });
    }
}
exports.ListOrderService = ListOrderService;
