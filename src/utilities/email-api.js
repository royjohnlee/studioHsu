import sendRequest from "./send-request";
const BASE_URL = '/api/email';

export async function addEmail(emailData) {
    console.log(emailData)
    return sendRequest(BASE_URL, 'POST', emailData);
}

export async function toggleRead(email) {
    console.log(email)
    return sendRequest(`${BASE_URL}/${email._id}`, 'PUT', email)
}

export async function deleteEmail(emailId) {
    console.log(emailId)
    return sendRequest(`${BASE_URL}/${emailId}`, 'DELETE')
}
