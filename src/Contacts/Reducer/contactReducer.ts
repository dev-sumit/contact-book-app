import { ADDCONTACT, ADDCONTACT_FAILURE, ADDCONTACT_SUCCESS, ContactsAction, FETCHCONTACT, FETCHCONTACT_SUCCESS, GETALLCONTACTS, GETALLCONTACTS_FAILURE, GETALLCONTACTS_SUCCESS, UPDATECONTACT, UPDATECONTACT_FAILURE, UPDATECONTACT_SUCCESS } from "../Actions/def";
import ContactsState, { defaultContactsState } from "../State/contactsState";


export default function contactsReducer(state: ContactsState = defaultContactsState(), action: ContactsAction): ContactsState{
    
    switch(action.type) {
        case ADDCONTACT: {
            return { ...state, successStatus: -1 }
        }
        case ADDCONTACT_SUCCESS: {
            return { ...state, successStatus: action.payload.status }
        }
        case ADDCONTACT_FAILURE: {
            return { ...state, successStatus: action.payload.status }
        }
        case UPDATECONTACT: {
            return { ...state, successStatus: -1 }
        }
        case UPDATECONTACT_SUCCESS: {
            return {  ...state, successStatus: action.payload.status }
        }
        case UPDATECONTACT_FAILURE: {
            return { ...state, successStatus: action.payload.status }
        }
        case GETALLCONTACTS: {
            return { ...state, loader: true }
        }
        case GETALLCONTACTS_SUCCESS: {
            return { ...state, contactsList: action.payload.contactsList, loader: false }
        }
        case GETALLCONTACTS_FAILURE: {
            return { ...state, loader: false }
        }
        case FETCHCONTACT: {
            return { ...state }
        }
        case FETCHCONTACT_SUCCESS: {
            return { ...state, fetchedContact : action.payload.fetchedContact }
        }
        default: { return {...state }; }
    }
}