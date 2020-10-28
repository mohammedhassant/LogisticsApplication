import { LightningElement } from 'lwc';
import Account_object from '@salesforce/schema/Account';
import Name_field from '@salesforce/schema/Account.Name';
import Phone_field from '@salesforce/schema/Account.Phone';
import Location_field from '@salesforce/schema/Account.Location__c';
import Pickup_Location_Field from '@salesforce/schema/Account.Pickup_Location__c';
import Delivery_Address_Field from '@salesforce/schema/Account.Delivery_Address__c';
import Email__c from '@salesforce/schema/Account.Email__c';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class Customer_Details extends LightningElement {

    accountObject = Account_object;
    nameField = Name_field;
    phoneField = Phone_field;
    locationField = Location_field;
    pickupLocationField = Pickup_Location_Field;
    deliveryAddressField = Delivery_Address_Field;
    email_Id = Email__c;

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    showToast(){
        const event = new showToastEvent({
            message:'Customer Details is Saved ',
            Variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
}