import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectValueFilter } from 'redux/contacts/contactSelectors'

// import { FilterLabel, FilterInput } from './Filter.styled';


export const Filter = () => {
  const dispatch = useDispatch(setFilter);
  const filter = useSelector(selectValueFilter);

  return (
    <div>
      <label>
        Find contacts by name
        <input
          name="filter"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
          type="text"
        />
      </label>
    </div>
  );
};
