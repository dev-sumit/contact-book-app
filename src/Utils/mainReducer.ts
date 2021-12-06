import { combineReducers } from "redux";
import contactsReducer from "../Contacts/Reducer/contactReducer";
import ContactsState from "../Contacts/State/contactsState";


export interface StoreTree {
    contacts: ContactsState
}

export const mainReducer = combineReducers({
    contacts: contactsReducer
});