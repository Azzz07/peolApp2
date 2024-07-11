/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function visiblePaymentRule(clientAPI) {
    debugger
    var type = clientAPI._control.context.binding.type;
    if( type === "RQASTRINGListOfChoices"){
        return true;
    }else{
        return false;
    }
}

