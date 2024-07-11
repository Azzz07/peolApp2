// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function count(clientAPI) {

//     export default function count(sectionProxy, clientAPI) {
//         debugger
//         let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
//         let queryOptions =  `$filter=supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and  invitationId eq '${a}'`;;
//         // $expand=supplier_header_rel,supplier_to_sbid&$filter=invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and supplier_header_rel/status ne 'Open' and award_status ne 'Yes'
//         // let queryOptions =  `$filter=supplier_header_rel/status eq 'Completed' and invitationId eq '${a}'`;;
//         // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`

//         return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table',queryOptions)
//         .then(count => {
      
//         // Return the caption as a String with the filtered count
//         return `Closed Bids (${count})`;
//         })
//         .catch(error => {
//         console.error('Error fetching count:', error);
//         return 'Error: Unable to fetch count';
//         });
        
// }

export default function count(sectionProxy, clientAPI) {

    let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
    // let queryOptions =  `$filter=supplier_header_rel/status eq 'Open' and invitationId eq '${a}'`;;
    //    let queryOptions =  `$filter=(supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and  invitationId eq '${a}') or (supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and  invitationId eq '${a}')`;;
      //  let queryOptions = `$filter=(supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and invitationId eq '${a}') or (supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '${a}')`;
      //  let queryOptions = `$filter=(supplier_header_rel/status ne 'Open' and invitationId eq '${a}')`;myLOgin
       let queryOptions = `$filter=(supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed' and phone_main eq '${a}')`;
      //  let queryOptions = `$filter=(supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed' and phone_main eq '${a}')`;

      //  let queryOptions = `$filter=(status ne 'Open' and status ne 'Completed') and phone_main eq '${a}'`;
      // let queryOptions = `$filter=(status ne 'Open' and status ne 'Completed' and phone_main eq '${a}')`;

   //or (supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '${a}')`;
    return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table',queryOptions)
    .then(count => { 
    // Return the caption as a String with the filtered count
    return `Closed Bids (${count})`;
    })
    .catch(error => {
    console.error('Error fetching count:', error);
    return 'Error: Unable to fetch count';
    });
    }