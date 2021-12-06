

export default interface ContactsState {
    contactsList: Contact[];
    successStatus: number;
    loader: boolean;
    fetchedContact: Contact;
}


export interface Contact {
    id: number;
    name: string;
    contactNo: string;
    status: string;
    location: string;
    tags: string[];
}

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

export function defaultContactsState(): ContactsState {
    return {
        contactsList: [],
        successStatus: -1,
        loader: false,
        fetchedContact: {
            id: -1,
            name: '',
            contactNo: '',
            status: '',
            location: '',
            tags: []
        }
    }
}