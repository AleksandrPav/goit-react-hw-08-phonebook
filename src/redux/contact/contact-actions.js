import { createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

export const addContact = createAction("contacts/add", (data) => {
   
    return {
    payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
    },
    };
});
    
console.log(addContact.type)

export const deleteContact = createAction("contacts/delete")






