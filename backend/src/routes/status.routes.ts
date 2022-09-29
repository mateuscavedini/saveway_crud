import { Request, Response, Router } from "express";

export const statusRoutes = Router()

statusRoutes.get("/", (req: Request, res: Response): Response => {
    try {
        return res.status(200).json({message: "server is running ok"})
    } catch (error) {
        return res.status(500).json({message: error})
    }
})