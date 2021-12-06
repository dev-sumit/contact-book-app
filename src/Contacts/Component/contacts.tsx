import { Button, Form, Input, InputNumber, Modal, Space, Tag } from 'antd';
import { FormInstance } from 'antd/es/form';
import React, { Component } from 'react'
import Table, { ColumnsType } from "antd/lib/table";
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { Contact } from '../State/contactsState';


interface Props {
    contactsList: Contact[];
    successStatus: number;
    loader: boolean;
    fetchedContact: Contact;
    addContact: (name: string, contactNo: string, status: string, location: string, tags: string[] ) => void;
    updateContact: (id: number, name: string, contactNo: string, status: string, location: string, tags: string[]) => void;
    fetchContact: (id: number) => void;
    getAllContacts: () => void;
}

interface State {
    isModalVisible: boolean;
    modalTitle: string;
    actionType: string;
    id: number;
    nameInput: string;
    contactNoInput: string;
    statusInput: string;
    locationInput: string;
    tagsInput: string;
}


export default class Contacts extends Component<Props, State> {
    formRef = React.createRef<FormInstance>();

    constructor(props: Props){
        super(props);
        this.state = {
            isModalVisible: false,
            modalTitle: '',
            actionType: '',
            id: -1,
            nameInput: '',
            contactNoInput: '',
            statusInput: '',
            locationInput: '',
            tagsInput: ''
        }
    }
    
    componentDidMount(){
        this.props.getAllContacts();
    }

    componentDidUpdate(prevProps: Props) {
        if(this.props.fetchedContact !== prevProps.fetchedContact){
            
            if(this.state.actionType !== '' && this.props.fetchedContact.id !== -1){
                this.setState({
                    id: this.props.fetchedContact.id,
                    nameInput: String(this.props.fetchedContact.name),
                    contactNoInput: String(this.props.fetchedContact.contactNo),
                    statusInput: String(this.props.fetchedContact.status),
                    locationInput: String(this.props.fetchedContact.location),
                    tagsInput: String(this.props.fetchedContact.tags.join()),
                    isModalVisible: true
                });
            }
        }
    }

    showContact = (id: number) => {
        
        this.props.fetchContact(id);
        this.setState({
            actionType: 'view',
            modalTitle: 'Contact Details',
        });

    }

    addContact = () => {
        this.setState({
            isModalVisible: true,
            modalTitle: 'Add Contact',
            actionType: 'add'
        })
    }

    updateContact = (id: number) => {
        
        this.props.fetchContact(id);
        this.setState({
            modalTitle: 'Update Contact',
            actionType: 'update'
        })
    } 

    onSubmit = (event: any) => {
        let {actionType, nameInput, contactNoInput, statusInput, locationInput, tagsInput, id } = this.state;
        event.preventDefault();
        let tags = tagsInput.split(',').map((item: string) =>item.trim());
        // let id = this.props.fetchedContact.id;
        console.log(actionType);
        if(actionType === 'add'){
            this.props.addContact(nameInput, contactNoInput, statusInput, locationInput, tags);
            window.location.reload();
        } else if (actionType === 'update') {
            this.props.updateContact(id, nameInput, contactNoInput, statusInput, locationInput, tags);
            window.location.reload();
        }
        this.setState({
            isModalVisible: false,
            modalTitle: '',
            actionType: '',
            id: -1,
            nameInput: '',
            contactNoInput: '',
            statusInput: '',
            locationInput: '',
            tagsInput: ''
        });
    }

    hideModal(){
        this.setState({
            isModalVisible: false,
            modalTitle: '',
            actionType: '',
            id: -1,
            nameInput: '',
            contactNoInput: '',
            statusInput: '',
            locationInput: '',
            tagsInput: ''
        });
    }

    
    render() {
        let {contactsList, fetchedContact} = this.props;
        let { isModalVisible, modalTitle, actionType, nameInput, contactNoInput, statusInput, locationInput, tagsInput } = this.state;
        const contactListColumns: ColumnsType<Contact> = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                render: status => (
                    <span className='capitalize'>
                        {status}
                    </span>
                )
            },
            {
                title: 'Location',
                dataIndex: 'location',
                key: 'location'
            },
            {
                title: 'Tags',
                dataIndex: 'tags',
                key: 'tags',
                render: tags => (
                    <span>
                        {tags.map((tag: string) => {
                        let color = tag.length > 6 ? 'geekblue' : 'green';
                        if (tag.toLocaleLowerCase() === 'client') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                            </Tag>
                        );
                        })}
                    </span>
                ),
            },
            {
                title: 'Actions',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type='text' className="blue-btn" icon={<EyeOutlined />} onClick={() => this.showContact(record.id)} >View Details</Button>
                        <Button type="text" className='blue-btn' icon={<EditOutlined />} onClick={() => this.updateContact(record.id)} >Edit Contact</Button>
                    </Space>
                ),
            }
        ];

        return (
            <div className="contacts">
                <div className=''>
                    <span className='main-title'>DOZ Pharmacy - Contacts</span>
                    <Button className='add-contacts-btn' size='large' onClick={() => this.addContact()} >Add Contact</Button>
                </div>
                <div className='table-div'>
                    <Table rowClassName={()=>"tableRow"} 
                    columns={contactListColumns} 
                    pagination={{position: ['topCenter','bottomCenter'], pageSize: 6}} 
                    dataSource={contactsList} />
                </div>
                <Modal title={modalTitle} visible={isModalVisible} onOk={()=> this.hideModal()} onCancel={()=> this.hideModal()} maskStyle={{borderRadius: '50px'}}>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" id="name" value={nameInput} onChange={(e)=> {e.preventDefault(); this.setState({ nameInput: e.target.value }); } } required disabled={actionType === "view"} placeholder='Name*' ></input>
                                <div className="underline"></div>
                            </div>
                            <div className="input-data">
                                <input type="text" id="last-name" value={contactNoInput} onChange={(e)=> {e.preventDefault(); this.setState({ contactNoInput: e.target.value }); } } required disabled={actionType === "view"} placeholder='Contact No*' ></input>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="status" id="status" value={statusInput} onChange={(e)=> {e.preventDefault(); this.setState({ statusInput: e.target.value });  } } required disabled={actionType === "view"} placeholder='Status*' ></input>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="location" id="location" value={locationInput} onChange={(e)=> {e.preventDefault(); this.setState({ locationInput: e.target.value });  } } required disabled={actionType === "view"} placeholder='Location*' ></input>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="tags" id="tags" value={tagsInput} onChange={(e)=> {e.preventDefault(); this.setState({ tagsInput: e.target.value });  } } required disabled={actionType === "view"} placeholder='Tags* (comma seperated)' ></input>
                                <div className="underline"></div>
                            </div>
                        </div>
                        {actionType !== 'view' &&
                            <div className="form-row submit-btn">
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>

                        }
                    </form>
                </Modal>
            </div>
        )
    }
}
