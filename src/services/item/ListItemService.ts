import prismaClient from "../../prisma";

interface ListItemRequest {
    order_id: string
    skip: number
    limit: number
}

class ListItemByOrderService {
    async execute({ order_id, limit, skip }: ListItemRequest) {

        const itemsOrder = await prismaClient.item.findMany({
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
        })

        return itemsOrder

    }
}

export { ListItemByOrderService }