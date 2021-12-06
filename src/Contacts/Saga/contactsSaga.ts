
import { call, put, all, takeLatest } from 'redux-saga/effects';
import ContactsAPI from '../Actions/API';
import { ADDCONTACT, AddContact, FETCHCONTACT, FetchContact, GETALLCONTACTS, GetAllContacts, UPDATECONTACT, UpdateContact } from "../Actions/def";
import ContactsActionGenerator from '../Actions/gen';
import { Contact, ResponseGenerator } from '../State/contactsState';

function* addContact(action: AddContact) {
    let url = "http://localhost:5000/api/contacts";
    let name = action.payload.name;
    let contactNo = action.payload.contactNo;
    let status = action.payload.status;
    let location = action.payload.location;
    let tags = action.payload.tags;
    try {
        let response: ResponseGenerator = yield call(ContactsAPI.addContact, url, name, contactNo, status, location, tags);
        switch(response.status) {
            case 200: {
                yield put(ContactsActionGenerator.addContactSuccess(1));
                break;
            }
            default:{
                yield put(ContactsActionGenerator.addContactFailure(0));
                break;
            }
        }
    } catch(e) {
        yield put(ContactsActionGenerator.addContactFailure(0));
    }
}

function* updateContact(action: UpdateContact) {
    let id = action.payload.id;
    let url = "http://localhost:5000/api/contacts/update/" + id;
    let name = action.payload.name;
    let contactNo = action.payload.contactNo;
    let status = action.payload.status;
    let location = action.payload.location;
    let tags = action.payload.tags;
    try {
        let response: ResponseGenerator = yield call(ContactsAPI.updateContact, url, name, contactNo, status, location, tags );
        switch(response.status) {
            case 200: {
                yield put(ContactsActionGenerator.updateContactSuccess(1));
                break;
            }
            default:{
                yield put(ContactsActionGenerator.updateContactFailure(0));
                break;
            }
        }
    } catch(e) {
        yield put(ContactsActionGenerator.updateContactFailure(0));
    }
}

function* getAllContacts(action: GetAllContacts ) {
    let url = "http://localhost:5000/api/contacts";
    try {
        let response: ResponseGenerator = yield call(ContactsAPI.getAllContacts, url );
        switch(response.status) {
            case 200: {
                let contactList = response.data as Contact[];
                yield put(ContactsActionGenerator.getAllContactsSuccess(contactList));
                break;
            }
            default:{
                yield put(ContactsActionGenerator.getAllContactsFailure());
                break;
            }
        }
    } catch(e) {
        yield put(ContactsActionGenerator.getAllContactsFailure());
    }
}

function* fetchContact(action: FetchContact) {
    let id = action.payload.id;
    let url = "http://localhost:5000/api/contacts/" + id;
    try {
        let response: ResponseGenerator = yield call(ContactsAPI.fetchContact, url); 
        switch(response.status) {
            case 200: {
                let contact = response.data as Contact;
                yield put(ContactsActionGenerator.fetchContactsSuccess(contact));
                break;
            }
            default: {
                yield put(ContactsActionGenerator.fetchContactsFailure());
                break;
            }
        }
    } catch(e) {
        yield put(ContactsActionGenerator.fetchContact(id));
    }

}

export default function* contactsWatcher() {
    yield all([
        takeLatest(ADDCONTACT, addContact),
        takeLatest(UPDATECONTACT, updateContact),
        takeLatest(GETALLCONTACTS, getAllContacts),
        takeLatest(FETCHCONTACT, fetchContact)
    ])
}