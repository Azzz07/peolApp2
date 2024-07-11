/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function docIDvalff(clientAPI) {
    return clientAPI._control._view._containerCallback.context.binding.doc_id;
}
