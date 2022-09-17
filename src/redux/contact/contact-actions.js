import { createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

export const fetchContactsLoading = createAction("contacts/fetch/loading");
export const fetchContactsSuccess = createAction("contacts/fetch/success");
export const fetchContactsError = createAction("contacts/fetch/error");
        

export const addContact = createAction("contacts/add", (data) => {
   
    return {
    payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
    },
    };
});

export const deleteContact = createAction("contacts/delete")






