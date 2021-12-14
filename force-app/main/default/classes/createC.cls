public with sharing class createC {
    @AuraEnabled()

    public static void createCon(String acc , String name) {
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
