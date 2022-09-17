import { getContactsApi } from "shared/api/contacts";

import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from "./contact-actions";


export const fetchContacts = () => {
    const func = async (dispatch) => {
        dispatch(fetchContactsLoading());
        try {
            const data = await getContactsApi ();
            console.log(data);
            dispatch(fetchContactsSuccess(data));
        } catch (error) {
            dispatch(fetchContactsError(error));
        }
    };

    return func;
    
}

console.log(getContactsApi ());