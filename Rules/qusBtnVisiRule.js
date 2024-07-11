/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function qusBtnVisiRule(clientAPI) {
    debugger
    // var auctiontype = clientAPI._context.binding.eventTypeName    
    var auctiontype = clientAPI._context._clientAPI._context.binding.supplier_header_rel.eventTypeName    
    //  clientAPI._context.binding.supplier_header_rel.eventTypeName;
    // _context.binding.supplier_header_rel.eventTypeName
    if (auctiontype === "RFP"){
        return true;
    }
    else{
        return false;
    }
}
    


