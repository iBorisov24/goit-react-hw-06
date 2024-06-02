import { createSlice } from '@reduxjs/toolkit';
const contacts = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
	name: 'contacts',
	initialState: {
		contacts: {
			items: contacts,
		},
	},
	reducers: {
		addContact: {
			reducer(state, action) {
				state.contacts.items.push(action.payload);
			},
			prepare(text) {
				return {
					payload: text,
					id: crypto.randomUUID(),
				};
			},
		},
		deleteContact(state, action) {
			const index = state.contacts.items.findIndex(
				item => item.id === action.payload
			);
			state.contacts.items.splice(index, 1);
		},
	},
});
export const selectContacts = state => state.contacts.contacts.items;
export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
