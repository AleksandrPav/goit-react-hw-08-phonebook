import { CHANGE_FILTER } from './filter-types';




const initialStore = '';

const filterReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return store;
  }

}

export default filterReducer;