/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function openDocRule(clientAPI) {
    debugger
    var MimeType
    var contentType = clientAPI._context.binding["content@odata.mediaContentType"];

    if ( contentType === "application/pdf" ){
        return MimeType = "application/pdf";
    }
    else if (contentType === "image/jpeg" || contentType === "image/png") {
        MimeType = "image/jpeg"; // Or you can choose the appropriate MIME type for your use case
    } else if (contentType === "text/plain") {
       return MimeType = "text/plain";
    } else if (contentType === "video/mp4" || contentType === "video/mpeg") {
        MimeType = "video/mp4"; // Or you can choose the appropriate MIME type for your use case
} else if (contentType === "application/vnd.ms-excel" || contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    MimeType = "application/vnd.ms-excel"; // Or you can choose the appropriate MIME type for your use case
} else {
        // Handle other types or provide a default behavior
    }
}
