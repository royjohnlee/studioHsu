import EmailCard from "../../components/EmailCard/EmailCard";
import { useState } from "react";
import * as emailAPI from '../../utilities/email-api'

export default function ContactPage({ user }) {
    const [emailBody, setEmailBody] = useState('');
    const [isRead, setIsRead] = useState(false);
    const [emails, setEmails] = useState([]);

    async function handleAddContact(evt) {
        evt.preventDefault();
        if (emailBody === "") return;
        const allEmail = await emailAPI.addEmail({
            name: user.name,
            email: user.email,
            textBox: emailBody,
            isRead
        });
        setEmails(allEmail);
        setEmailBody('');
        setIsRead(false);
    }

    async function toggleRead(email) {
        email.isRead = !email.isRead;
        setEmails([...emails]);
        await emailAPI.toggleRead(email);
    }

    async function handleDelete(id) {
        await emailAPI.deleteEmail(id)
        const filteredEmails = emails.filter(e => e._id !== id)
        setEmails(filteredEmails)
    }

    const emailCards = emails.map(e => (
        <EmailCard email={e} key={e._id} toggleRead={toggleRead} handleDelete={handleDelete} />
    ));

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
                        value={emailBody}
                        onChange={evt => setEmailBody(evt.target.value)}
                    />
                    <button>Submit</button>
                </div>
            </form>
            {user.admin && <div>{emailCards}</div>}
        </div>
    );
}
