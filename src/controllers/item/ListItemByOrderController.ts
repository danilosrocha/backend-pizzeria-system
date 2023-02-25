import { Request, Response } from "express";
import { ListItemByOrderService } from "../../services/item/ListItemService";

class ListItemByOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string
        const page = (req.query.page || 1) as number
        const limit = Number(req.query.limit || 1) as number
        const skip = (page - 1) * limit

        const listItemByOrderservice = new ListItemByOrderService()

        const items = await listItemByOrderservice.execute({ order_id, limit, skip })

        return res.json(items)
    }
}

export { ListItemByOrderController }