/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filforqus(clientAPI) {
    let a = clientAPI._context.binding.invitationId
//  sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
var docIdValue = clientAPI._control.context.binding.doc_id

return `$filter=doc_id eq '${docIdValue}' and invitationId eq '${a}' and type eq 'RQAATTACH'`
}
