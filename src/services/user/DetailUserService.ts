import prismaClient from "../../prisma";

// interface DetailRequest {
//     name: string;
//     email: string;
//     password: string;
// }

class DetailUserService {
    async execute(userId: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return user
    }
}

export { DetailUserService }