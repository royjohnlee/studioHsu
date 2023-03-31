import { useState, useEffect } from "react";

export default function EmailCard({ email, updateEmail }) {

    const [emailFormData, setEmailFormData] = useState({ ...email })

    function handleChange(emailID) {

        setEmailFormData({
            ...emailFormData,
            isRead: !emailFormData.isRead
        })
        updateEmail(emailID, emailFormData)
    }

    useEffect(function () { console.log(`HI`) },);


    return (
        <div>
            <h3>{email.name}</h3>
            <h3>{email.email}</h3>
            <h3>{email.textBox}</h3>
            <h3>{email.createdAt}</h3>
            <div>
                <div>read?</div>
                <input
                    type="checkbox" name="isRead"
                    checked={emailFormData.isRead}
                    onChange={() => handleChange(email._id)} />
            </div>
            <hr />
        </div>
    )
}
