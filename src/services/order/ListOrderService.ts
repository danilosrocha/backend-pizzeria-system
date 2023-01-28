import prismaClient from "../../prisma";

export interface ListOrderRequest {
    skip: number
    limit: number
}

class ListOrderService {
    async execute({ skip, limit }: ListOrderRequest) {

        const orders = await prismaClient.order.findMany({
            skip: skip,
            take: Number(limit),
            select: {
                id: true,
                name: true
            }
        })

        return orders
    }
}

export { ListOrderService }