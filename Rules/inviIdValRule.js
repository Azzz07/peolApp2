/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function inviIdValRule(clientAPI) {
    return clientAPI._control.context.binding.invitationId
}
