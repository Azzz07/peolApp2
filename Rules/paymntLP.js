/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function paymntLP(clientAPI,sectionProxy) {
    debugger
    var inviId = clientAPI._control.context.binding.invitationId;
    var docId = clientAPI._control.context.binding.doc_id;
    var qus_id = clientAPI._context.binding.questionnaire_id;

    return qus_id





    // var readPromise = sectionProxy.read('/n44/Services/capurl.service', 'Attachments_table','');
    // console.log(readPromise);
    // return readPromise.then((result)=> {
    //     //the result is an ObservableArray (https://docs.nativescript.org/ns-framework-modules/observable-array)
    //     alert("length: " + result.length);
    //     var returnArray = [];
    //     for (var i = 0; i < result.length; i++)
    //     {
    //       var item = result.getItem(i);
    //       // Only add item with OrderNumber less than 100 to the return array;
    //       // This is just an example, you should change this according to your need
    //     //   if (item.OrderNumber < 100) {
    //     //      returnArray.push(item);
    //     //   }
    //     }
    //     // Finally, return the filtered array
    //     // return returnArray;
    //   }); 

}

// /**
//  * Describe this function...
//  * @param {IClientAPI} context
//  */
// export default function paymntLP(context) {
//     debugger    
//     console.log('DirectEntityReadTest');
//     let productId = '06ccaa6e-ae41-48d2-8557-6c4497c41bfb';
//     return context.read('/n44/Services/capurl.service',`Attachments_table`,[]).then(function(results) {
//         console.log('Read Success');
//         if (results.length > 0) {
//             let prod = results.getItem(0);
//             console.log(`Product Name: ${prod.Name}`);
//             return context.executeAction({
//                 // 'Name': "/SalesOrder/Actions/GenericToastMessage.action",
//                 // 'Properties': {
//                 //     "Message": `Product Name: ${prod.Name}`
//                 // }
//             });
//         }
//     });
// }
