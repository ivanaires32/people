import { peopleRepository } from "../Repositorys/people.repositoy";

async function getPeople() {
    const id = Math.ceil(Math.random() * 4)
    const result = await peopleRepository.getPeople(id)
    return result
}

export const peopleServices = {
    getPeople
}