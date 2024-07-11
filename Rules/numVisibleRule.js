/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function numVisibleRule(clientAPI) {
    debugger
    var type = clientAPI._control.context.binding.type;
    if( type === "RQABIGDEC"){
        return true;
    }else{
        return false;
    }
}

