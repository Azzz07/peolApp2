// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function userReplyRule(clientAPI) {
//     debugger
//    var type =  clientAPI._context.binding.type;
//    if( type === "RQABOOLEAN"){
//     return "#Control:user_reply2/#SelectedValue"
//    }else if( type === "RQASTRINGListOfChoices"){
//     return "#Control:userReply4/#SelectedValue"
//    }
//     else{
//     return "#Control:user_reply3/#Value"
//    }
// }
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function userReplyRule(clientAPI) {
    debugger;
    var type = clientAPI._context.binding.type;
    if (type === "RQABOOLEAN") {
        return "#Control:user_reply2/#SelectedValue";
    } else if (type === "RQASTRINGListOfChoices") {
        return "#Control:userReply4/#SelectedValue";
    } else {
        // Default case: Return a default value or handle it as needed
        return "#Control:user_reply3/#Value";
    }
}

