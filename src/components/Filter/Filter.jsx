import React from "react";
import css from "./Filter.module.css";


const Filter = ({ filter, onFilterChange }) => {
    
    return (
        <div className={css.filter}>
        <label className={css.filter__label}>
            Filter by name:
                <input className={css.filter__input }type="text" value={filter} onChange={onFilterChange} />
        </label>
        </div>
    );
}
    
export default Filter;