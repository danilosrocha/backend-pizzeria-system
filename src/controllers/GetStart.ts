import { Request, Response } from "express";


class GetStartController {
    async handle(req: Request, res: Response) {
        return res.send(
            `
            <h1>Todo REST API</h1>            
            `.trim()
        )
    }
}

export { GetStartController }

