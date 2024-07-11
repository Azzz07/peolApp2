/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function imageRule(clientAPI) {
    debugger
    var type = clientAPI._context.binding.mediaType;

    if (type === "application/vnd.ms-excel"){

        return "sap-icon://document"
    }
    else if (type === "application/pdf"){
        return "sap-icon://pdf-attachment"
    }
    else if(type === "image/jpeg" || type === "image/png"){
        return "/chck/Services/capurl.service/{@odata.readLink}/content"
    }
    else{
        return "sap-icon://document"
    }

}