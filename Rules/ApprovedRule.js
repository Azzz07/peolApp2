/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ApprovedRule(clientAPI) {
    /**
 * @param {IClientAPI} clientAPI - The client API object.
 */
    debugger
    var doc_idd = clientAPI._control._view._containerCallback.context.binding.doc_id
    var d = doc_idd.split('"').join('');

    var dd = clientAPI._control.context.binding["@odata.id"]
let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
let docIdValue = match[0].match(/'([^']*)'/)[1]; // Extracting the value from the entire match
console.log(docIdValue);
    var docIdValue2 = "Doc50393780"; // Assuming you have the value for docIdValue
 var   i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
 i = i.replace('docIdvalue', "'" + docIdValue + "'");
     i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
   
var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
var ii = `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
// return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`


// return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=doc_id eq '${docIdValue}' and status ne 'Open')`;

// and supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq 'yes'
return `$filter=doc_id eq '${docIdValue}' and (status ne 'Completed' or status ne 'Open')`;

}
///










// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function ApprovedRule(clientAPI) {
//     /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
//     // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function filterrule(clientAPI) {

// //     debugger

// // // var l = clientAPI.getPageProxy().getControl('SSectionObjectHeader0')
// // var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id

// // // $filter=status eq 'Open' or doc_id eq doc_id

// // }
// /**
//  * Filters records based on the given criteria.
//  * @param {IClientAPI} clientAPI - The client API object.
//  */

//     debugger
//     var doc_idd = clientAPI._control._view._containerCallback.context.binding.doc_id
//     // doc_idd = "'" + doc_idd.replace(/"/g, '') + "'";
//     // var d = doc_idd.replace(/"/g, '');
//     var d = doc_idd.split('"').join('');

//     var dd = clientAPI._control.context.binding["@odata.id"]
//     // let string = "Supplier_table(doc_id='Doc50393780',invitationId='testcase1peol%40gmail.com')";
// let match = dd.match(/doc_id='(.*?)'/); // Using a regular expression to find the value within single quotes
// let docIdValue = match[0].match(/'([^']*)'/)[1]; // Extracting the value from the entire match
// console.log(docIdValue);


//     // Assuming you have a data service defined and bound to a control
//     // const service = clientAPI.getPageProxy().getDataService('YourDataService');
//     // const service = '/n4/Services/ajayurl.service';

//     // const service = '/my_pro14/Services/mydestinations.service';
//     // const entitySet = 'Supplier_bid_table';

//     // const targetPath = "#Page:Supplier_bid_table_List/#Control:SectionObjectTable0";
//     // Define the filter criteria
//     var docIdValue2 = "Doc50393780"; // Assuming you have the value for docIdValue
//  var   i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
//  i = i.replace('docIdvalue', "'" + docIdValue + "'");
//      i = "$filter=status eq 'Open' or doc_id eq docIdValue or doc_id eq d" 
//     // return "$filter=doc_id eq d" 
//     // + clientAPI.evaluateTargetPath(targetPath) + "'";

//     // Execute the query with the filter criteria
// //     return service.query(filter)
// //         .then(result => {
// //             // Handle the filtered records here
// //             console.log("Filtered Records:", result);
// //         })
// //         .catch(error => {
// //             // Handle any errors that occur during the query
// //             console.error("Error filtering records:", error);
// //         });$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq '')
// var doc_id = clientAPI._control._view._containerCallback.context.binding.doc_id;
// // var ii = `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`
// var ii = `$filter=doc_id eq '${docIdValue}' and status ne 'Open'`
// // return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status ne 'yes' and doc_id eq '${docIdValue}' and status ne 'Open'`


// // return `$expand=supplier_bid_header_rel,supplier_bid_header_rel/header_supplier_rel,supplier_bid_header_rel/header_questionnarie_rel&$filter=doc_id eq '${docIdValue}' and status ne 'Open')`;

// // and supplier_bid_header_rel/header_supplier_rel/any(z: z/award_status eq 'yes'
// return `$filter=doc_id eq '${docIdValue}' and (status ne 'Completed' or status ne 'Open')`;

// }






