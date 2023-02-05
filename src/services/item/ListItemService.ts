import prismaClient from "../../prisma";

interface ListItemRequest {
    order_id: string
    skip: number
    limit: number
}

class ListItemByOrderService {
    async execute({ order_id, limit, skip }: ListItemRequest) {

        const itemsOrder = await prismaClient.item.findMany({
            skip: skip,
            take: limit,
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
                    }
                },
                product: {
                    select: {
                        id: true,
                        name: true,
                        price: true
                    }
                }
            }
        })

        return itemsOrder

    }
}

export { ListItemByOrderService }