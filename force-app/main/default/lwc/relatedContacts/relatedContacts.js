import { LightningElement, api, wire , track} from 'lwc';
import relatedContacts from '@salesforce/apex/relatedContacts.getRelatedContacts'; 
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
export default class RelatedContacts extends LightningElement {
 @api selectedAccount;
   
   
     @wire(relatedContacts)
     contacts;
  
     handleclick(event) {
        console.log(event + 'event in other component');
        console.log(event.detail + 'event detail');
        console.log(event.target.detail + 'event in other component');
      this.selectedAccount = event.target.dataset.id;
      console.log(  this.event.detail)
      console.log(  event.target.dataset.id)
      }
}