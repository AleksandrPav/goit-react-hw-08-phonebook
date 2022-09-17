import axios from "axios";

const instance = axios.create({
    baseURL: "https://6325875670c3fa390f89c800.mockapi.io/api/contacts"
});

export const getContactsApi  = async () => {
    const { data } = await instance.get("/");
    return data;
};

console.log(getContactsApi ());
