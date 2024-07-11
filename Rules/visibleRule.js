/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function visibleRule(clientAPI) {
    debugger
    var type = clientAPI._control.context.binding.type;
    if( type === "RQABOOLEAN"){
        return true;
    }else{
        return false;
    }
}
