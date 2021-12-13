public with sharing class getAccountList {
    @AuraEnabled(cacheable=true)
    public static  List<Account> getAccounts(){
        
List <Account>  Accounts = [Select Name, AnnualRevenue from Account Limit 10];       
        return Accounts ;
    }
}
