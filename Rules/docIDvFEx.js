// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function docIDvFEx(clientAPI) {

//     // let doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
//     function getDocumentId(clientAPI) {
//         return 'Doc54043991'
//         // return clientAPI._control._view._containerCallback.context.binding.doc_id;
//     }

//     clientAPI.executeAction("/n44/Actions/toQus.action");
// }

export function getDocumentId(clientAPI) {
    // Uncomment the line below if you want to use the actual doc_id from the context
    let doc = clientAPI._context._clientAPI._context.element._observable._boundItems[0].value
    // clientAPI._context.binding?.doc_id;   
    alert(`'from js rule' ${doc}`)
    return doc;
    // return 'Doc54043991'; // For testing purposes, returning a static value
    }

    export function getInvi(clientAPI) {
        // Uncomment the line below if you want to use the actual doc_id from the context
        return clientAPI._context.binding.invitationId
        // return 'Doc54043991'; // For testing purposes, returning a static value
        }
    
    export default function docIDvFEx(clientAPI) {
    // Now you can use getDocumentId here if needed
    let doc_id = getDocumentId(clientAPI);
    
    // Rest of your code
    clientAPI.executeAction("/n44/Actions/toQus.action");
    }



// export function getDocumentId(clientAPI) {
//     if (!clientAPI || !clientAPI._context || !clientAPI._context.binding) {
//         console.error("Invalid clientAPI or binding context");
//         alert("Invalid clientAPI or binding context");
//         return null;
//     }

//     let doc = clientAPI._context.binding.doc_id;
//     alert(`from js rulee: ${doc}`);
//     return doc;
// }

// export function getInvi(clientAPI) {
//     if (!clientAPI || !clientAPI._context || !clientAPI._context.binding) {
//         console.error("Invalid clientAPI or binding context");
//         alert("Invalid clientAPI or binding context");
//         return null;
//     }

//     return clientAPI._context.binding.invitationId;
// }

// export default function docIDvFEx(clientAPI) {
//     let doc_id = getDocumentId(clientAPI);
//     clientAPI.executeAction("/n44/Actions/toQus.action");
// }
