import { Request, Response } from "express";
import { ItemRequest } from "../../services/item/AddItemService";
import { AddItemService } from "../../services/item/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { amount, order_id, product_id }: ItemRequest = req.body

        const addItemService = new AddItemService()

        const item = await addItemService.execute({ amount, order_id, product_id })

        return res.json(item)
    }
}

export { AddItemController }