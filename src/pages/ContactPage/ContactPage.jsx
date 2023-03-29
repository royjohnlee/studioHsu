import EmailCard from "../../components/EmailCard/EmailCard";
import { useState } from "react";
import * as emailAPI from '../../utilities/email-api'

export default function ContactPage({ user }) {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        textBox: "",
    })

    const [emails, setEmails] = useState([])

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleAddContact(evt) {
        evt.preventDefault();
        if (formData.textBox === "") return
        const allEmail = await emailAPI.addEmail(formData)
        console.log(allEmail)
        setFormData({
            name: user.name,
            email: user.email,
            textBox: "",
        })
        setEmails(allEmail)
    }

    const emailCards = emails.map(e => (
        <EmailCard email={e} key={e._id} />
    ))

    return (
        <div>
            <h1>ContactPage</h1>
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

            {user.admin && { emailCards }}
        </div>
    );
}
