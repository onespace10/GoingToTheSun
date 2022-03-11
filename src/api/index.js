import axios from 'axios'


// https://random-data-api.com/api/users/random_user
// https://random-data-api.com/api/nation/random_nation

const instance = axios.create ({
    // baseURL임 baseUrl아님
    baseURL: "https://random-data-api.com/api/"
})

export async function getRandomUser(size=10){
    const users = await instance.get(`/users/random_user?size=${size}`)
    return users
}
export async function getRandomFlag(size=10){
    const flags = await instance.get(`/nation/random_nation`)
    return flags
}