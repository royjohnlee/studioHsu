import EmailCard from "../../components/EmailCard/EmailCard";
import { useState, useEffect } from "react";
import * as emailAPI from '../../utilities/email-api'

export default function ContactPage({ user }) {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        textBox: "",
        isRead: false,
    })

    const [emails, setEmails] = useState([])


    // const [emailToMap, setEmailToMap] = useState([...emails])

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    // function filterEmail(filter) {
    //     let filteredEmail = []
    //     if (filter === "all") filteredEmail = emails.map(e => e)
    //     if (filter === "read") filteredEmail = emails.filter((e) => e.isRead)
    //     if (filter === "unread") filteredEmail = emails.filter((e) => !e.isRead)
    //     setEmailToMap(filteredEmail)
    // }

    async function handleAddContact(evt) {
        evt.preventDefault();
        if (formData.textBox === "") return
        const allEmail = await emailAPI.addEmail(formData)
        setFormData({
            name: user.name,
            email: user.email,
            textBox: "",
            isRead: false,
        })
        setEmails(allEmail)
    }

    async function updateEmail(emailId, emailFormData) {
        const updatedEmails = emails.map(function (e) {
            if (e._id === emailId) return emailFormData
            else return e
        })
        setEmails(updatedEmails)

        await emailAPI.updateEmail(emailId, emailFormData)
    }

    const emailCards = emails.map(e => (
        <EmailCard email={e} key={e._id} updateEmail={updateEmail} />
    ))


    return (
        <div>
            <h1>ContactPage</h1>
            {/* {user.admin && <div>
                <button onClick={() => filterEmail("all")}>All</button>
                <button onClick={() => filterEmail("read")}>Read</button>
                <button onClick={() => filterEmail("unread")}>Unread</button>
            </div>} */}

            <form className="ContactForm" onSubmit={handleAddContact}>
                <div>
                    <label htmlFor="ContactUs">Contact Us</label>
                    <h3>name: {user.name}</h3>
                    <h3>email: {user.email}</h3>
                    <input
                        type="text"
                        name="textBox"
                        value={formData.textBox}
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                </div>
            </form>
            {user.admin && <div>{emailCards}</div>}
        </div>
    );
}
