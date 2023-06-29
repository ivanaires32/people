import httpStatus from "http-status"
import { Response, Request } from "express"
import { peopleServices } from "../Services/people.services"

export async function getPeople(req: Request, res: Response) {
    try {
        const result = await peopleServices.getPeople()

        res.status(httpStatus.OK).send(result)
    } catch (err) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}