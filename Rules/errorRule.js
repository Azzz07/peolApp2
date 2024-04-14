/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function errorRule(clientAPI) {
    /**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
// export default function errorRule(clientAPI) {
    debugger;
    const mesg = clientAPI._context._clientData.actionResults.update.error;
    console.log(mesg);

    // Ensure mesg is a string
    const mesgString = String(mesg);

    // Extracting the error message
    const errorMessageMatch = mesgString.match(/"message":"([^"]+)"/);
    if (errorMessageMatch && errorMessageMatch.length > 1) {
        const errorMessage = errorMessageMatch[1];
      console.log(errorMessage); // Output: Your Bidding price should be less than 5600
      return  errorMessageMatch[1];
    } else {
        console.log("Error message not found or in unexpected format.");
    }
}
// }
