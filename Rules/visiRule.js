/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function visiRule(clientAPI) {
    debugger
    var type = clientAPI._control.context.binding.type;
    if( type === "RQASTRING"){
        return true;
    }else{
        return false;
    }
}
