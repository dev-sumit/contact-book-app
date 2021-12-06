import { Contact } from "../State/contactsState";

export const ADDCONTACT = 'ADDCONTACT';
export type ADDCONTACT = typeof ADDCONTACT;
export const ADDCONTACT_SUCCESS = 'ADDCONTACT_SUCCESS';
export type ADDCONTACT_SUCCESS = typeof ADDCONTACT_SUCCESS;
export const ADDCONTACT_FAILURE = 'ADDCONTACT_FAILURE';
export type ADDCONTACT_FAILURE = typeof ADDCONTACT_FAILURE;

export const UPDATECONTACT = 'UPDATECONTACT';
export type UPDATECONTACT = typeof UPDATECONTACT;
export const UPDATECONTACT_SUCCESS = 'UPDATECONTACT_SUCCESS';
export type UPDATECONTACT_SUCCESS = typeof UPDATECONTACT_SUCCESS;
export const UPDATECONTACT_FAILURE = 'UPDATECONTACT_FAILURE';
export type UPDATECONTACT_FAILURE = typeof UPDATECONTACT_FAILURE;

export const GETALLCONTACTS = 'GETALLCONTACTS';
export type GETALLCONTACTS = typeof GETALLCONTACTS;
export const GETALLCONTACTS_SUCCESS = 'GETALLCONTACTS_SUCCESS';
export type GETALLCONTACTS_SUCCESS = typeof GETALLCONTACTS_SUCCESS;
export const GETALLCONTACTS_FAILURE = 'GETALLCONTACTS_FAILURE';
export type GETALLCONTACTS_FAILURE = typeof GETALLCONTACTS_FAILURE;

export const FETCHCONTACT = 'FETCHCONTACT';
export type FETCHCONTACT = typeof FETCHCONTACT;
export const FETCHCONTACT_SUCCESS = 'FETCHCONTACT_SUCCESS';
export type FETCHCONTACT_SUCCESS = typeof FETCHCONTACT_SUCCESS;
export const FETCHCONTACT_FAILURE = 'FETCHCONTACT_FAILURE';
export type FETCHCONTACT_FAILURE = typeof FETCHCONTACT_FAILURE;

export const SETSUCCESSSTATUS = 'SETSUCCESSSTATUS';
export type SETSUCCESSSTATUS = typeof SETSUCCESSSTATUS; 

export interface AddContact {
    type: ADDCONTACT;
    payload: {
        name: string;
        contactNo: string;
        status: string;
        location: string;
        tags: string[];
    }
}

export interface AddContactSuccess {
    type: ADDCONTACT_SUCCESS;
    payload: {
        status: number;
    }
}

export interface AddContactFailure {
    type: ADDCONTACT_FAILURE;
    payload: {
        status: number;
    }
}

export interface UpdateContact {
    type: UPDATECONTACT;
    payload: {
        id: number;
        name: string;
        contactNo: string;
        status: string;
        location: string;
        tags: string[];
    }
}

export interface UpdateContactSuccess {
    type: UPDATECONTACT_SUCCESS;
    payload: {
        status: number;
    }
}

export interface UpdateContactFailure {
    type: UPDATECONTACT_FAILURE;
    payload: {
        status: number;
    }
}

export interface GetAllContacts {
    type: GETALLCONTACTS;
}

export interface GetAllContacts_Success {
    type: GETALLCONTACTS_SUCCESS;
    payload: {
        contactsList: Contact[];
    }
}

export interface GetAllContactsSuccess {
    type: GETALLCONTACTS_SUCCESS;
    payload: {
        contactsList: Contact[];
    }
}

export interface GetAllContactsFailure {
    type: GETALLCONTACTS_FAILURE;
}

export interface FetchContact {
    type: FETCHCONTACT;
    payload: {
        id: number;
    }
}

export interface FetchContactSuccess {
    type: FETCHCONTACT_SUCCESS;
    payload: {
        fetchedContact: Contact;
    }
}

export interface FetchContactFailure {
    type: FETCHCONTACT_FAILURE;
}

export type ContactsAction = 
    AddContact |
    AddContactSuccess |
    AddContactFailure |
    UpdateContact |
    UpdateContactSuccess |
    UpdateContactFailure |
    GetAllContacts |
    GetAllContactsSuccess |
    GetAllContactsFailure |
    FetchContact |
    FetchContactSuccess |
    FetchContactFailure

