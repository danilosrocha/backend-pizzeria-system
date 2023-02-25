import prismaClient from "../../prisma";

interface ItemRequest {
    item_id: string
}


class RemoveItemService {
    async execute({ item_id }: ItemRequest) {

        const item = await prismaClient.item.findFirst({
            where: {
                id: item_id
            }
        })

        if (!item) {
            throw new Error("This item was not created!");
        }

        const delItem = await prismaClient.item.delete({
            where: {
                id: item_id
            }
        })

        const message = {
            message: "Successfully deleted item!",
            ...delItem,
        }

        return message
    }
}

export { RemoveItemService }