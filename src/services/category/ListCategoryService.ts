import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {

        const categoriesNotExist = await prismaClient.category.count({})

        if (!categoriesNotExist) {
            throw new Error("Not exist categories!")
        }

        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return categories
    }
}

export { ListCategoryService }