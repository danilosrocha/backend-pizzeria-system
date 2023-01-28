import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { CreateUserController } from './controllers/user/CreateUserController'
import { CreateProductController } from './controllers/products/CreateProductController';
import { DetailUserController } from './controllers/user/DetailUserController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { ListByCategoryController } from './controllers/products/ListByCategoryController';
import { isAuthenticated } from './middlewares/isAuthenticated'
import { AuthUserController } from './controllers/user/AuthUserController'

import uploadConfig from './config/multer'
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { AddItemController } from './controllers/item/AddItemController';
import { ListItemByOrderController } from './controllers/item/ListItemByOrderController';
import { RemoveItemController } from './controllers/item/RemoveItemController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/userInfo', isAuthenticated, new DetailUserController().handle)

//-- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/categories', isAuthenticated, new ListCategoryController().handle)

//-- ROTAS PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//-- ROTAS ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.get('/order', isAuthenticated, new ListOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

//-- ROTAS ITEM
router.post('/item', isAuthenticated, new AddItemController().handle)

router.get('/item', isAuthenticated, new ListItemByOrderController().handle)

router.delete('/item', isAuthenticated, new RemoveItemController().handle)
export { router }; 