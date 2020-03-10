const FB = require('fb')

module.exports = (params,cb)=>{
    if(!params.apiKey || typeof(params.apiKey)!='string' || params.apiKey==null ){
    cb({status : "error" , value:"Api Key Not Found"})
    return
    }
    
    if((!params.pageId ||  params.pageId==null) && (params.getFormIds== true || params.getFormIds=="true")){
    cb({status : "error" , value:"Page Id Not Found"})
    return
     }

    if((!params.formId ||  params.formId==null) && (params.getLeads== true || params.getLeads=="true")){
    cb({status : "error" , value:"Form Id Not Found"})
      return;
    }

    var url = null
    
    if((params.getLeads== true || params.getLeads=="true") &&  (params.getFormIds== true || params.getFormIds=="true")){
    cb({status : "error", value:"Set only one parameter (getLeads / getFormIds) true"})
    return;
    }

    if(params.getLeads == true || params.getLeads == "true" ){
    if(params.apiKey && params.formId)
    url = "/" + params.formId + "/leads"
    }
    else if(params.getFormIds == true || params.getFormIds == "true" ){
    if(params.apiKey && params.pageId)
    url = "/" + params.pageId + "/leadgen_forms"
    }else{
      cb({status : "error", value:"Set atleast one parameter (getLeads / getFormIds) true"})
      return;
    }
    console.log(url)
    FB.options({ accessToken: params.apiKey })    
    FB.api(
        url,
        function (response) {
          if (response && !response.error) {
            if (response.data && response.data.length > 0) {
            cb({status:"success", value : response})
            }
          } else {
            cb({status: "error" , value :err})
          }
        }
      );

}