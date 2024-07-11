/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function closedFilter(clientAPI) {
    debugger

    return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( (supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed') and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`;

    // return `$filter= phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and (status ne 'Completed' or status ne 'Open')`;
    // return `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')` //for mylogin
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`

}
// $expand=supplier_header_rel,supplier_to_sbid,supplier_to_question_reply_rel&$filter=invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and supplier_header_rel/status ne 'Open' and award_status ne 'Yes'











// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function closedFilter(clientAPI) {
//     debugger
// //    
// //     var dd = clientAPI._control.context.binding["@odata.id"]
// //     // let string = "Supplier_table(doc_id='Doc50393780',invitationId='testcase1peol%40gmail.com')";
// // let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
// // let docIdValue = match[0].match(/'([^']*)'/)[1];
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( (supplier_header_rel/status ne 'Open' or supplier_header_rel/status ne 'Completed') and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
//     return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( (supplier_header_rel/status ne 'Open' and supplier_header_rel/status ne 'Completed') and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`;

//     // return `$filter= phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and (status ne 'Completed' or status ne 'Open')`;
//     // return `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')` //for mylogin
//     // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`

// }
// // $expand=supplier_header_rel,supplier_to_sbid,supplier_to_question_reply_rel&$filter=invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' and supplier_header_rel/status ne 'Open' and award_status ne 'Yes'