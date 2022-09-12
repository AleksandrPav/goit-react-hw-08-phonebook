import { ADD_CONTACT, DELETE_CONTACT} from "./contact-types";

import {nanoid} from "nanoid";


export  const addContact = (payload) => {
    return { type: ADD_CONTACT, payload: { ...payload, id: nanoid() } };
};

export const deleteContact = (payload) => {
    return { type: DELETE_CONTACT, payload };
};




