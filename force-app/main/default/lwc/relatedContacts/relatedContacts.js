import { LightningElement, api, wire } from 'lwc';
import relatedContacts from '@salesforce/apex/relatedContacts.getRelatedContacts'; 
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
export default class RelatedContacts extends LightningElement {
    selectedAccount;
    @api account;
   
    // @wire(relatedContacts)
    // contacts;
  

    handleNotification(event) {
      console.log( 'dsadsa');
        alert(event.detail);
        this.selectedAccount = event.detail;
        console.log(this.selectedAccount);
        alert(this.selectedAccount);
        relatedContacts(this.selectedAccount.id);
      }
}