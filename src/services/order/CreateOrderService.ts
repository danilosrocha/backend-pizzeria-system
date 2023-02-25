import prismaClient from "../../prisma"

export interface OrderRequest {
    table: number,
    name?: string,
}

class CreateOrderService {
    async execute({ table, name }: OrderRequest) {

        if (!table) {
            throw new Error("Order needs fields filled in to create!!")
        }

        const orderAlreadyExists = await prismaClient.order.findFirst({
            where: {
                table,
            }
        })

        if (orderAlreadyExists) {
            throw new Error("Order Already Exists!!")
        }

        const order = await prismaClient.order.create({
            data: {
                table,
                name: name
            }, select: {
                id: true,
                table: true,
                status: true,
                draft: true,
                name: true
            }
        })

        return order
    }
}

export { CreateOrderService }