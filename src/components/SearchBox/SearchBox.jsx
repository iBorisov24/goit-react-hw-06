import css from './SearchBox.module.css';
import { filterContacts } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filtersSlice';
export default function SearchBox() {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilters);
	return (
		<input
			className={css.input}
			type="text"
			name="filter"
			onChange={e => {
				dispatch(filterContacts(e.target.value.trim().toLowerCase()));
			}}
			placeholder="Type to find"
			value={filter}
		/>
	);
}
