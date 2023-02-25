"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const CreateProductController_1 = require("./controllers/products/CreateProductController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const ListByCategoryController_1 = require("./controllers/products/ListByCategoryController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const multer_2 = __importDefault(require("./config/multer"));
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const AddItemController_1 = require("./controllers/item/AddItemController");
const ListItemByOrderController_1 = require("./controllers/item/ListItemByOrderController");
const RemoveItemController_1 = require("./controllers/item/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const CompleteOrderController_1 = require("./controllers/order/CompleteOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//-- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/userInfo', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//-- ROTAS CATEGORY
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/categories', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
//-- ROTAS PRODUCT
router.post('/product', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
//-- ROTAS ORDER
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrderController().handle);
router.delete('/order', isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.put('/order/finish', isAuthenticated_1.isAuthenticated, new CompleteOrderController_1.CompleteOrderController().handle);
//-- ROTAS ITEM
router.post('/order/add', isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
router.get('/order/detail', isAuthenticated_1.isAuthenticated, new ListItemByOrderController_1.ListItemByOrderController().handle);
router.delete('/order/remove', isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
