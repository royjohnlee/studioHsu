import sendRequest from "./send-request";
const BASE_URL = '/api/email';

export async function addEmail(emailData) {
    return sendRequest(BASE_URL, 'POST', emailData);
}

export async function updateEmail(emailId, emailData) {
    console.log("email api: ", emailId, emailData)
    return sendRequest(`${BASE_URL}/${emailId}`, 'PUT', emailData)
}
