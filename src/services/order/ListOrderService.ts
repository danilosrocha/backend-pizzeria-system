import prismaClient from "../../prisma";

export interface ListOrderRequest {
    status: string,
    skip: number
    limit: number
}

class ListOrderService {
    async execute({ skip, limit, status }: ListOrderRequest) {

        if (!status) {
            const orders = await prismaClient.order.findMany({
                skip: skip,
                take: Number(limit),
                where: {
                    status: false,
                    draft: false,
                },
                orderBy: {
                    created_at: "desc"
                },
                select: {
                    id: true,
                    name: true,
                    table: true,
                    status: true,
                    draft: true
                }
            })
            return orders
        }

        const orders = await prismaClient.order.findMany({
            skip: skip,
            take: Number(limit),
            where: {
                status: false,
                draft: true,
            },
            select: {
                id: true,
                name: true,
                table: true,
                status: true,
                draft: true,
            }
        })
        return orders

    }
}

export { ListOrderService }