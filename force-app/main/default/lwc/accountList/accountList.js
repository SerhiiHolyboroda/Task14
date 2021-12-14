import { LightningElement, api, wire, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import relatedContacts from '@salesforce/apex/relatedContacts.getRelatedContacts'; 
import getAccounts from '@salesforce/apex/getAccountList.getAccounts'; 
import createCon from '@salesforce/apex/createC.createCon'; 
import conMainObject from '@salesforce/schema/Contact';
import conAccId from '@salesforce/schema/Contact.AccountId';
import conLastName from '@salesforce/schema/Contact.LastName';
export default class AccountList extends LightningElement {
   @api AccountId;
  // @api contacts
   contactNew
   res
    @wire(getAccounts)
    accounts;
    // @wire(relatedContacts)
    // contacts ;
    @track boolVisible = false;  
 
    @track contacts  = [];;
    accId;


    handlethisclick(event){
     
      this.boolVisible = true; 
      console.log(this.boolVisible);
   
      console.log(event.target.dataset.id + 'id form account!!');
 
      this.accId = event.target.dataset.id;
 
    }
    saveContact(event){
    
      this.contactNew = event.target.value;
    
    }
    createContact(){
      console.log(   this.accId,   this.contactNew + 'parameters to input');
       
     createCon({ acc:  this.accId, name:  this.contactNew})
       .then((result) => {
         
          console.log(result);
         
          console.log(this.contacts);
      })
      }

    handleclick(event) {
      
       this.AccountId =  event.target.dataset.id ;
      
      relatedContacts({  AccountId: this.AccountId  })
      .then((result) => {
       // console.log(JSON.stringify(JSON.stringify(result)) +'first');
         this.contacts = [];
result.forEach(element => {
  console.log( element.Name )
  this.contacts.push(element.Name);
   
 
  })
  console.log(this.contacts + ' this.contacts')
    
     
  })
     // event.preventDefault();
       console.log(this.contacts + '')
   
   console.log(this.contacts + ' this.contacts')
      console.log('we are here now !!!');
    }


    
    

    insertContactAction(){

      console.log( this.accId,   this.contactNew );
      const fields = {};
      fields[conLastName.fieldApiName] = this.contactNew;
      fields[conAccId.fieldApiName] = this.accId;
       
     
      const recordInput = { apiName: conMainObject.objectApiName, fields };
      createRecord(recordInput)
          .then(contactobj=> {
              this.contactId = contactobj.id;
              this.dispatchEvent(
                  new ShowToastEvent({
                      title: 'Success',
                      message: 'Contact record has been created',
                      variant: 'success',
                  }),
              );
              


          })
          .catch(error => {
              this.dispatchEvent(
                  new ShowToastEvent({
                      title: 'Error creating record',
                      message: error.body.message,
                      variant: 'error',
                  }),
              );
          });
  }

}
 
 