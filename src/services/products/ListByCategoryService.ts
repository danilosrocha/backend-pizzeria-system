import prismaClient from "../../prisma";

interface ProductByCategoryRequest {
    category_id: string
    skip: number
    limit: number
}

class ListByCategoryService {
    async execute({ category_id, skip, limit }: ProductByCategoryRequest) {

        try {
            const findProducts = await prismaClient.product.findMany({
                where: {
                    category_id: category_id
                },
                skip,
                take: Number(limit),
                orderBy: {
                    created_at: "asc"
                },
            });

            if (findProducts.length === 0) {
                return { "message": 'No product registered in this category!' }
            }

            return findProducts
        } catch (err) {
            console.error(err);
            throw new Error('Error fetching items')
        }

    }
}

export { ListByCategoryService }