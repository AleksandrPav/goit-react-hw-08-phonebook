import { CHANGE_FILTER } from "./filter-types";



const changeFilter = (value) => ({
    type: CHANGE_FILTER,
    payload: value,
});

export default changeFilter;



