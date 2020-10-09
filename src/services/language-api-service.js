import config from "../config";
import TokenService from "./token-service";
const URL = `${config.API_ENDPOINT}/language`

const languageService = {
    // getLanguage() {
    //     return fetch(`${config.API_ENDPOINT}/language`, {
    //         method: "GET",
    //         headers: {
    //             authorization: `bearer ${TokenService.getAuthToken()}`,
    //             "Content-Type":"application/json",
    //         },
    //     }).then((res) =>
    //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    //   );
    // }

    async getLanguage() {
        const authBearer = { headers: { authorization: `bearer ${TokenService.getAuthToken()}` } }
        const res = await fetch(URL, authBearer)
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    },
    async getNextWord() {
        const authBearer = { headers: { authorization: `bearer ${TokenService.getAuthToken()}` } }
        const res = await fetch(`${URL}/head`, authBearer)
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    },

    async submitGuess(guess) {
        console.log('API Guess endpoint:', guess);
        const authBearer = {
            headers:
            {
                authorization: `bearer ${TokenService.getAuthToken()}`,
                "Content-Type": "application/json"
            }
        }
        const postData = {
            method: 'POST',
            body: JSON.stringify(guess)
        }
        const res = await fetch(`${URL}/guess`, postData, authBearer)
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    }
};

export default languageService;
