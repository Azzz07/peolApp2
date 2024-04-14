/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function countApproved(clientAPI) {
    debugger;
    // Fetch the count of approved bids where ApproveId is A101
    let queryOptions = `$filter=status eq 'Completed'`;
    return sectionProxy.count('/n44/Services/capurl.service', 'Header_table', queryOptions)
    .then(count => {
    // console.log('hello');
    // console.log(count);
    // Return the caption as a String with the filtered count
    return `Approved Bids (${count})`;
    })
    .catch(error => {
    console.error('Error fetching count:', error);
    return 'Error: Unable to fetch count';
    });
}
