
import { connect } from "react-redux";
import { StoreTree } from "../../Utils/mainReducer";
import ContactsActionGenerator from "../Actions/gen";
import Contacts from "../Component/contacts";


export function mapStateToProps(appState: StoreTree, ownProps: any) {
    return {
        contactsList: appState.contacts.contactsList,
        successStatus: appState.contacts.successStatus,
        loader: appState.contacts.loader,
        fetchedContact: appState.contacts.fetchedContact
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        addContact: (name: string, contactNo: string, status: string, location: string, tags: string[] ) => dispatch(ContactsActionGenerator.addContact(name, contactNo, status, location, tags)),
        updateContact: (id: number, name: string, contactNo: string, status: string, location: string, tags: string[]) => dispatch(ContactsActionGenerator.updateContact(id, name, contactNo, status, location, tags)),
        fetchContact: (id: number) => dispatch(ContactsActionGenerator.fetchContact(id)),
        getAllContacts: () => dispatch(ContactsActionGenerator.getAllContacts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);