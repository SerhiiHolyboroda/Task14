public class relatedContacts {
    @AuraEnabled(cacheable=true)
    public static  List<Contact> getRelatedContacts(String AccountId){
       
List <Contact>  rContacts = [Select Name, Title, Email, Phone from Contact Where AccountId = :AccountId];       
        return rContacts ;
    }
}