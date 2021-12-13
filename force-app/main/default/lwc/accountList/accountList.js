import { LightningElement, api, wire } from 'lwc';

import getAccounts from '@salesforce/apex/getAccountList.getAccounts'; 
export default class AccountList extends LightningElement {
 
   
    @api recordId;
    @wire(getAccounts)
    accounts;
         
 
    selectHandler(event) {
      console.log( 'dsadsa');
      console.log( this.account.id);
        event.preventDefault();
    
         
        this.dispatchEvent(new CustomEvent('selected', {detail: this.account}));
        alert(this.account.id);
        console.log( this.account.id);
      }
}