export default function awardedCountRule(sectionProxy, clientAPI) {

    let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
    let queryOptions =  `$filter=(supplier_header_rel/status ne 'Open' and phone_main eq '${a}' and award_status eq 'Yes')`;
    return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table',queryOptions)
    .then(count => {
  
    // Return the caption as a String with the filtered count
    return `Awarded Bids (${count})`;
    })
    .catch(error => {
    console.error('Error fetching count:', error);
    return 'Error: Unable to fetch count';
    });
}    
// return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`





























// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function awardedCountRule(clientAPI,sectionProxy) {
// //     debugger;
// //     // Fetch the count of approved bids where ApproveId is A101
// //     let queryOptions = `$filter=status eq 'Completed'`;
// //     return sectionProxy.count('/n44/Services/capurl.service', 'Header_table', queryOptions)
// //     .then(count => {
// //     // console.log('hello');
// //     // console.log(count);
// //     // Return the caption as a String with the filtered count
// //     return `Awarded Bids (${count})`;
// //     })
// //     .catch(error => {
// //     console.error('Error fetching count:', error);
// //     return 'Error: Unable to fetch count';
// //     });
// // }
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function count(clientAPI) {

// export default function awardedCountRule(sectionProxy, clientAPI) {

//     let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
//     // let queryOptions =  `$filter=supplier_header_rel/status eq 'Completed' and invitationId eq '${a}'`;;
//     // let queryOptions = `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
//     // let queryOptions =  `$filter=(supplier_header_rel/status eq 'Completed' and invitationId eq '${a}' and award_status eq 'Yes') or (supplier_header_rel/status eq 'Pending Selection' and invitationId eq '${a}' and award_status eq 'Yes')`;;
//     let queryOptions =  `$filter=(supplier_header_rel/status ne 'Open' and phone_main eq '${a}' and award_status eq 'Yes')`;;
//     // let queryOptions =  `$filter=(supplier_header_rel/status ne 'Open' and invitationId eq '${a}' and award_status eq 'Yes')`;;myLogin
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' )`;


//     return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table',queryOptions)
//     .then(count => {
  
//     // Return the caption as a String with the filtered count
//     return `Awarded Bids (${count})`;
//     })
//     .catch(error => {
//     console.error('Error fetching count:', error);
//     return 'Error: Unable to fetch count';
//     });
// }    
// // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
