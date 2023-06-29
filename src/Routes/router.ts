import { getPeople } from "../Controllers/people.controller";
import { Router, Request, Response } from "express";

const router: Router = Router()

router.get("/health", (req: Request, res: Response) => {
    res.send("ok")
})
router.get("/people", getPeople)

export default router
