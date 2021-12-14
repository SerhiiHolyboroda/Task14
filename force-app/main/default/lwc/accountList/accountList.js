import { LightningElement, api, wire, track } from 'lwc';
import relatedContacts from '@salesforce/apex/relatedContacts.getRelatedContacts'; 
import getAccounts from '@salesforce/apex/getAccountList.getAccounts'; 
import createCon from '@salesforce/apex/createC.createCon'; 
export default class AccountList extends LightningElement {
   @api accounId;
   @api    contacts
   contactNew
    @track contacts
    @wire(getAccounts)
    accounts;
    @wire(relatedContacts)
    contacts;
    @track boolVisible = false;  
 

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
      console.log(   this.accId,   this.contactNew);
       
       (createCon, { acc:  this.accId, name:  this.contactNew})
      
      }

    handleclick(event) {
      console.log(this.contacts)
      console.log(event.target.dataset.id);
 
      event.preventDefault();
      this.accounId =  event.target.dataset.id ;
      console.log(this.accounId + '  event.target.value ');
     //relatedContacts(event.target.dataset.id);
     relatedContacts({
      recordId: event.target.dataset.id 
  })
  .then((result) => {
    console.log(this.contacts);
      console.log(result);
      this.contacts = result;
      console.log(this.contacts);
  })
  .catch((error) => {
      console.log(error);
  })
  .finally(() => {
      console.log('Finally');
  })
      // const selectedEvent = new CustomEvent('onlick', {
      //   detail:  this.accounId
      // });
      this.dispatchEvent(new CustomEvent('selected', {detail: this.event.target.dataset.id}));
      // Dispatches the event.
   //   this.dispatchEvent(selectedEvent);
      console.log('we are here now !!!');
    }


    
    
      }
