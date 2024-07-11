/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function attepmtRule(clientAPI) {
    debugger
  var type =  clientAPI._context.clientAPIProps.actionBinding.type
  if( type === "RQAATTACH"){
    return clientAPI.executeAction('/n44/Actions/attachment_create.action');
}else{
    return clientAPI.executeAction('/n44/Actions/toQusEdit.action');
}
}
