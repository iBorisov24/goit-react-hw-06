import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { filterContacts, selectFilters } from '../../redux/filtersSlice';

export default function App() {
	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />

			<ContactList />
		</>
	);
}
