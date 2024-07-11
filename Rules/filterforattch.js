/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filterforattch(clientAPI) {
    debugger

    var docIdValue = clientAPI._control.context.binding.doc_id

return `$filter=doc_id eq '${docIdValue}'`
}
