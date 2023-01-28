import { Request, Response } from 'express';
import { ListOrderService } from './../../services/order/ListOrderService';

class ListOrderController {
    async handle(req: Request, res: Response) {
        const page = (req.query.page || 1) as number;
        const limit = (req.query.limit || 10) as number;
        const skip = (page - 1) * limit;

        const listOrderService = new ListOrderService();

        const orders = await listOrderService.execute({ skip, limit })

        return res.json(orders)

    }
}

export { ListOrderController }