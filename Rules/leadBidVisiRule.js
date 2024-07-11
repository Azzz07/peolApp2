/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function leadBidVisiRule(clientAPI) {
    debugger
    var auctiontype = clientAPI._context.binding.eventTypeName;
    if (auctiontype === "Auction"){
        return true;
    }
    else{
        return false;
    }
}

