import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfigContact = {
	key: 'contacts-list',
	storage,
};
const persistConfigFilter = {
	key: 'Filter',
	storage,
};
const persistedContactReducer = persistReducer(
	persistConfigContact,
	contactReducer
);
const persistedFilterReducer = persistReducer(
	persistConfigFilter,
	filterReducer
);

export const store = configureStore({
	reducer: {
		contacts: persistedContactReducer,
		filters: persistedFilterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export let persistor = persistStore(store);
