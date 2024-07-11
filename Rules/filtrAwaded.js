/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filtrAwaded(clientAPI) {
    return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status eq 'Yes' and phone_main eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' )`;
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status ne 'Open' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' )`;//mylogin
    //or ( supplier_header_rel/status eq 'Pending Selection' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
    // return `$expand=supplier_header_rel,supplier_to_sbid&$filter=( invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}') or ( supplier_header_rel/status eq 'Completed' and award_status eq 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}' ) or ( supplier_header_rel/status eq 'Pending Selection' and award_status ne 'Yes' and invitationId eq '{{#Page:Login/#Control:FormCellSimpleProperty0/#Value}}')`
    
}  
// ne open and awarded status awarded
