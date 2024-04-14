// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function countRule(sectionProxy,clientAPI) {
//     // Fetch the count of approved bids
//     return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table')
//     .then((count) => {
//     //  console.log("hello");
//     //  console.log(count)
//     // // Create the caption string with the count
//     // let Caption = `ApproveBids (${count})`;
    
//     // // Return the caption string directly
//     // return Caption;

//     let myCaption = 'Quotes Bids';
//     let otherValue = count;

//     // Return the caption as a String
//     return `${myCaption}(${otherValue})`;
//     });
// }

// export default function count(sectionProxy, clientAPI) {
//     debugger;
//     // Fetch the count of approved bids where ApproveId is A101
//     let queryOptions = `$filter=status eq 'Open'`;
//     return sectionProxy.count('/n44/Services/capurl.service', 'Header_table', queryOptions)
//     .then(count => {
//     // console.log('hello');
//     // console.log(count);
//     // Return the caption as a String with the filtered count
//     return `Quotes Bids (${count})`;
//     })
//     .catch(error => {
//     console.error('Error fetching count:', error);
//     return 'Error: Unable to fetch count';
//     });
//     }
export default function count(sectionProxy, clientAPI) {

    let a = sectionProxy.evaluateTargetPath('#Page:Login/#Control:FormCellSimpleProperty0/#Value');
    let queryOptions =  `$filter=supplier_header_rel/status eq 'Open' and invitationId eq '${a}'`;;
    return sectionProxy.count('/n44/Services/capurl.service', 'Supplier_table',queryOptions)
    .then(count => {
  
    // Return the caption as a String with the filtered count
    return `Quote Bids (${count})`;
    })
    .catch(error => {
    console.error('Error fetching count:', error);
    return 'Error: Unable to fetch count';
    });
    }