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
import { SendOrderController } from './controllers/order/SendOrderController';
import { CompleteOrderController } from './controllers/order/CompleteOrderController';

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

router.get('/orders', isAuthenticated, new ListOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.put('/order/finish', isAuthenticated, new CompleteOrderController().handle)



//-- ROTAS ITEM
router.post('/order/add', isAuthenticated, new AddItemController().handle)

router.get('/order/detail', isAuthenticated, new ListItemByOrderController().handle)

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)


export { router }; 