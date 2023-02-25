import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string
}

class RemoveOrderService {
    async execute({ order_id }: OrderRequest) {

        if (!order_id) {
            throw new Error("Enter the table id!")
        }

        const order = await prismaClient.order.findFirst({
            where: {
                id: order_id
            }
        })

        if (!order) {
            throw new Error("Table does not exist!")
        }

        const delOrder = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        })

        const message = {
            message: "Successfully deleted order!",
            ...delOrder,
        }

        return message
    }
}

export { RemoveOrderService }