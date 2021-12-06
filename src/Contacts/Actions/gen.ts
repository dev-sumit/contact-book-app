import { Contact } from "../State/contactsState";
import { ADDCONTACT, AddContact, AddContactFailure, AddContactSuccess, ADDCONTACT_FAILURE, ADDCONTACT_SUCCESS, FETCHCONTACT, FetchContact, FetchContactFailure, FetchContactSuccess, FETCHCONTACT_FAILURE, FETCHCONTACT_SUCCESS, GETALLCONTACTS, GetAllContacts, GetAllContactsFailure, GetAllContactsSuccess, GETALLCONTACTS_FAILURE, GETALLCONTACTS_SUCCESS, UpdateContact, UPDATECONTACT, UpdateContactFailure, UpdateContactSuccess, UPDATECONTACT_FAILURE, UPDATECONTACT_SUCCESS } from "./def";


export default class ContactsActionGenerator {
    public static addContact(name: string, contactNo: string, status: string, location: string, tags: string[]): AddContact {
        return {
            type: ADDCONTACT,
            payload: {
                name: name,
                contactNo: contactNo,
                status: status,
                location: location,
                tags: tags
            }
        }
    }
    public static addContactSuccess(status: number): AddContactSuccess {
        return {
            type: ADDCONTACT_SUCCESS,
            payload: {
                status: status
            }
        }
    }
    public static addContactFailure(status: number): AddContactFailure {
        return {
            type: ADDCONTACT_FAILURE,
            payload: {
                status: status
            }
        }
    }
    public static updateContact(id: number, name: string, contactNo: string, status: string, location: string, tags: string[]): UpdateContact {
        return {
            type: UPDATECONTACT,
            payload: {
                id: id,
                name: name,
                contactNo: contactNo,
                status: status,
                location: location,
                tags: tags
            }
        }
    }
    public static updateContactSuccess(status: number): UpdateContactSuccess {
        return {
            type: UPDATECONTACT_SUCCESS,
            payload: {
                status: status
            }
        }
    }
    public static updateContactFailure(status: number): UpdateContactFailure {
        return {
            type: UPDATECONTACT_FAILURE,
            payload: {
                status: status
            }
        }
    }
    public static getAllContacts(): GetAllContacts {
        return {
            type: GETALLCONTACTS
        }
    }
    public static getAllContactsSuccess(contactsList: Contact[]): GetAllContactsSuccess {
        return {
            type: GETALLCONTACTS_SUCCESS,
            payload: {
                contactsList: contactsList
            }
        }
    }
    public static getAllContactsFailure(): GetAllContactsFailure {
        return {
            type: GETALLCONTACTS_FAILURE
        }
    }
    public static fetchContact(id: number): FetchContact {
        return {
            type: FETCHCONTACT,
            payload: {
                id: id
            }
        }
    }
    public static fetchContactsSuccess(fetchedContact: Contact): FetchContactSuccess {
        return {
            type: FETCHCONTACT_SUCCESS,
            payload: {
                fetchedContact: fetchedContact
            }
        }
    }
    public static fetchContactsFailure(): FetchContactFailure {
        return {
            type: FETCHCONTACT_FAILURE
        }
    }
}