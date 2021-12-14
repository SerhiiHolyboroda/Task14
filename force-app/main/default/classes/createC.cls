public with sharing class createC {
    @AuraEnabled(cacheable=true)
    public static void createCon(ID acc , String name) {
        try {
        Contact con = new Contact(
            FirstName=name,
             
            AccountId=acc);
            insert con;
        } catch(DmlException e) {
            System.debug('An unexpected error has occurred: ' + e.getMessage());
        }
    }
}
