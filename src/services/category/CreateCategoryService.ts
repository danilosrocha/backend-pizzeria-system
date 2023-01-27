import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {

        if (name === "") {
            throw new Error('Name Invalid')
        }

        // Verificar se a categoria já foi criada

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exist!")
        }


        const category = await prismaClient.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true
            }
        })

        return category
    }
}

export { CreateCategoryService }
