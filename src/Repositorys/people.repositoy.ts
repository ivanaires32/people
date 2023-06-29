import { db } from "../DataBase/database"

async function getPeople(id: number) {
    let query = `
        SELECT * FROM people
        WHERE id=$1
    `

    const result = await db.query(query, [id])
    return result.rows
}

export const peopleRepository = {
    getPeople
}