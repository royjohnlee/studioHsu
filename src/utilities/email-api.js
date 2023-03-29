import sendRequest from "./send-request";
const BASE_URL = '/api/email';

export async function addEmail(emailData) {
    return sendRequest(BASE_URL, 'POST', emailData);
}
