/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
// export default function count(clientAPI) {

    export default function count(sectionProxy, clientAPI) {

        let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
        let queryOptions =  `$filter=supplier_header_rel/status eq 'Completed' and invitationId eq '${a}'`;;
        return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table',queryOptions)
        .then(count => {
      
        // Return the caption as a String with the filtered count
        return `Approved Bids (${count})`;
        })
        .catch(error => {
        console.error('Error fetching count:', error);
        return 'Error: Unable to fetch count';
        });
        
}
