import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { loading, error } from '../../redux/contactsSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function App() {
	const dispatch = useDispatch();
	const Loading = useSelector(loading);
	const Error = useSelector(error);
	useEffect(() => {
		dispatch(fetchContacts());
	}, []);
	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
			{/* {Loading && <Loader />} */}
			{Error && <ErrorMessage />}
		</>
	);
}
