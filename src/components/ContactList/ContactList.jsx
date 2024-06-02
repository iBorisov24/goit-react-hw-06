import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilters } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
	const contacts = useSelector(selectContacts);
	const value = useSelector(selectFilters);
	const data = value
		? contacts.filter(item => item.name.toLowerCase().includes(value))
		: contacts;

	return (
		<ul className={css.cardList}>
			{data.map(friend => (
				<li key={friend.id}>
					<Contact
						name={friend.name}
						number={friend.number}
						id={friend.id}
						key={friend.id}
					/>
				</li>
			))}
		</ul>
	);
}
