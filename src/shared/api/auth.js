import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

export const signup = async (data) => {
    const { data: response } = await instance.post("/users/signup", data);
    return response;
}
