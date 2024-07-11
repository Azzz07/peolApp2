/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function attachDeleteRule(clientAPI) {
    return clientAPI.executeAction('/n44/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n44/Actions/attachDelete.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

