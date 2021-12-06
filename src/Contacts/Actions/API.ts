import AxiosGateWay from "../../Communication/AxiosGateway";


export default class ContactsAPI {
    public static addContact(url: string, name: string, contactNo: string, status: string, location: string, tags: string[]){
        return AxiosGateWay.post(url, {name: name, contactNo: contactNo, status: status, location: location, tags: tags }).then(
            result => {
                return result;
            }
        ).catch(
            error => {
                return error.response;
            }
        )
    };
    public static getAllContacts(url: string) {
        return AxiosGateWay.get(url).then(
            result => {
                return result;
            }
        ).catch(
            error => {
                return error.response;
            }
        )
    }
    public static updateContact(url: string, name: string, contactNo: string, status: string, location: string, tags: string[]){
        return AxiosGateWay.put(url, {name: name, contactNo: contactNo, status: status, location: location, tags: tags }).then(
            result => {
                return result;
            }
        ).catch(
            error => {
                return error.response;
            }
        )
    }
    public static fetchContact(url: string) {
        return AxiosGateWay.get(url).then(
            result => {
                return result;
            }
        ).catch(
            error => {
                return error.response;
            }
        )

    }
}