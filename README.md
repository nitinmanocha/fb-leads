# FB-LEADS

> Install the package


### Generate Api Key from Facebook Developer Console


## Usage

const FbLeads = require('fb-leads')


FbLeads({

    apiKey :"", // Insert api key (mandatory)

    formId:"",  // Insert form id (optional)

    pageId : "", // Insert pageId (optional)

    getLeads : true,

    getFormIds : false

},function(response){

// perform operations

})



### Note :
 > While retrieving Form ids -> Insert pageId , set "getFormIds" as true and "getLeads" as false 

 > While retrieving Leads -> Insert formId , set "getLeads" as true and "getFormIds" as false 
