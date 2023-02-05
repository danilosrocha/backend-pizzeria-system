import prismaClient from "../../prisma";

export interface OrderRequest {
    order_id: string
}

class SendOrderService {
    async execute({ order_id }: OrderRequest) {

        const orders = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        })

        return orders
    }
}

export { SendOrderService }