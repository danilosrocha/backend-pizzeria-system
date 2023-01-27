import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/products/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const page = (req.query.page || 1) as number;
        const limit = (req.query.limit || 10) as number;
        const skip = (page - 1) * limit;

        const category_id = req.query.category_id as string;

        const listByCategoryService = new ListByCategoryService()

        console.log(category_id);

        const productsByCategory = await listByCategoryService.execute({ category_id, skip, limit })

        return res.json(productsByCategory)
    }
}

export { ListByCategoryController }