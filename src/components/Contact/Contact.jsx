import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function Contact({ id, name, number, onDelete }) {
	const dispatch = useDispatch();
	return (
		<div className={css.card}>
			<p>{name}</p>
			<p>{number}</p>
			<button onClick={() => dispatch(deleteContact(id))} type="button">
				Delete
			</button>
		</div>
	);
}
