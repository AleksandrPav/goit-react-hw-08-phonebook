import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contact/contact-selectors';
import { changeFilter } from '../../redux/contact/contact-actions';

import css from "./Filter.module.css";


const Filter = () => {
      const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    return (
        <div className={css.filter}>
        <label className={css.filter__label}>
            Filter by name:
                <input className={css.filter__input }type="text" value={filter} onChange={e => dispatch(changeFilter(e.target.value))} />
        </label>
        </div>
    );
}
    
export default Filter;