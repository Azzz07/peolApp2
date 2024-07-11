/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function countRuleAwarded(clientAPI , sectionProxy) {
    let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
    // let queryOptions =  `$filter=supplier_header_rel/status eq 'Completed' and invitationId eq '${a}'`;

    let queryOptions = `$expand=supplier_header_rel,supplier_to_sbid&$filter=( phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
    // let queryOptions = `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`

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
